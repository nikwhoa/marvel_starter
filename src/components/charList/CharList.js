import { useState, useEffect, useRef } from 'react';
import useMarvelService from '../../services/MarvelService';
import './charList.scss';
import Spinner from '../spinner/spinner';
import ErrorMessage from '../errorMessage/errorMessage';
import PropTypes from 'prop-types';

const CharList = (props) => {

    const [charList, setCharList] = useState([])
    const [newItemLoading, setNewItemLoading] = useState(false)
    const [offset, setOffset] = useState(210)
    const [charEnded, setCharEnded] = useState(false)


    const { error, loading, getAllCharacters } = useMarvelService()


    useEffect(() => {
        onRequest(offset, true)
    }, [])


    const onRequest = (offset, initial) => {
        initial ? setNewItemLoading(false) : setNewItemLoading(true)
        getAllCharacters(offset).then(onCharListLoaded)
    }


    const onCharListLoaded = (newCharList) => {
        let ended = false
        
        if (newCharList.length < 9) {
            ended = true
        }

        setCharList(charList => [...charList, ...newCharList])
        setNewItemLoading(false)
        setOffset(offset => offset + 9)
        setCharEnded(charEnded => ended)
    }


    function renderItems(arr) {
        const items = arr.map((item) => {
            
            return (
                <li
                    className="char__item"
                    key={item.id}
                    onClick={() => props.updateId(item.id)}>
                    <img src={item.thumbnail} alt={item.name} style={item.thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg' ? { objectFit: 'contain' } : null} />
                    <div className="char__name">{item.name}</div>
                </li>
            )

        });
        return (
            <ul className="char__grid">
                {items}
            </ul>
        )
    }

    const items = renderItems(charList);
    const errorMessage = error ? <ErrorMessage /> : null
    const spinner = loading && !newItemLoading ? <Spinner /> : null
    

    return (
        <div className="char__list">
            <ul className="char__grid">
                {errorMessage}
                {spinner}
                {items}
            </ul>
            <button
                disabled={newItemLoading}
                onClick={() => onRequest(offset)}
                style={{ 'display': charEnded ? 'none' : 'block' }}
                className="button button__main button__long">
                <div className="inner">load more</div>
            </button>
        </div>
    )
}


CharList.propTypes = {
    updateId: PropTypes.func
}

export default CharList;