import './comicsList.scss';
import uw from '../../resources/img/UW.png';
import xMen from '../../resources/img/x-men.png';
import AppHeader from '../appHeader/AppHeader';
import CommicsBanner from './CommicsBanner';
import useMarvelService from '../../services/MarvelService';
import { useEffect, useState } from 'react';
import ErrorMessage from '../errorMessage/errorMessage';
import Spinner from '../spinner/spinner';
import { Link } from 'react-router-dom';

const ComicsList = () => {

    const [comics, setComics] = useState([])
    const [offset, setOffset] = useState(300)
    const [newItems, setNewItems] = useState(false)


    const { loading, error, getComics } = useMarvelService();

    useEffect(() => {
        onRequest(offset, true)
    }, [])

    const onRequest = (offset, initial) => {
        initial ? setNewItems(false) : setNewItems(true)
        getComics(offset).then(onComicsLoaded)
    }

    const onComicsLoaded = (newComics) => {
        setComics(comics => [...comics, ...newComics])
        setNewItems(false)
        setOffset(offset + 8)
    }


    function renderItems(arr) {
        const items = arr.map((item, i) => {
            return (
                <li key={item.title + '_' + i} className="comics__item">
                    {/* href={item.urls[0].url} */}
                    <Link to={`/comics/${item.id}`} >
                        <img src={item.thumbnail.path + '.jpg'} alt="ultimate war" className="comics__item-img" />
                        <div className="comics__item-name">{item.title}</div>
                        <div className="comics__item-price">{item.prices[0].price}$</div>
                    </Link>
                </li>
            )
        })

        return (
            <ul className="comics__grid">
                {items}
            </ul>
        )
    }

    const items = renderItems(comics)
    const errorMessage = error ? <ErrorMessage /> : null
    const spinner = loading && !newItems ? <Spinner /> : null
    
    return (

        <div className="comics__list app">
            <CommicsBanner />
            {errorMessage}
            {spinner}
            {items}
            <button onClick={() => onRequest(offset)} className="button button__main button__long">
                <div className="inner">load more</div>
            </button>
        </div>
    )
}

export default ComicsList;