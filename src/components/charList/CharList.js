import { useState, useEffect, useRef } from 'react';
import MarvelService from '../../services/MarvelService';
import './charList.scss';
import Spinner from '../spinner/spinner';
import ErrorMessage from '../errorMessage/errorMessage';
import PropTypes from 'prop-types';

const CharList = (props) => {

    const [charList, setCharList] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [newItemLoading, setNewItemLoading] = useState(false)
    const [offset, setOffset] = useState(240)
    const [charEnded, setCharEnded] = useState(false)


    const marvelService = new MarvelService();

    useEffect(() => {
        onRequest()
    }, [])

    const onError = () => {
        setError(true)
        setLoading(loading => false)
    }

    const onRequest = (offset) => {
        onCharListLoading()
        marvelService
            .getAllCharacters(offset)
            .then(onCharListLoaded)
            .catch(onError)
    }

    const onCharListLoading = () => {
        setNewItemLoading(true)
    }

    const onCharListLoaded = (newCharList) => {
        let ended = false

        if (newCharList.length < 9) {
            ended = true
        }

        setCharList(charList => [...charList, ...newCharList])
        setLoading(loading => false)
        setNewItemLoading(newItemLoading => false)
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
    const spinner = loading ? <Spinner /> : null
    const content = !(loading || error) ? items : null

    return (
        <div className="char__list">
            <ul className="char__grid">
                {errorMessage}
                {spinner}
                {content}
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