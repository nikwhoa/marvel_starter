import './comicsList.scss';
import uw from '../../resources/img/UW.png';
import xMen from '../../resources/img/x-men.png';
import AppHeader from '../appHeader/AppHeader';
import CommicsBanner from './CommicsBanner';
import useMarvelService from '../../services/MarvelService';
import { useEffect, useState } from 'react';
import ErrorMessage from '../errorMessage/errorMessage';
import Spinner from '../spinner/spinner';

const ComicsList = () => {

    const [comics, setComics] = useState(null)
    const [offset, setOffset] = useState(300)

    const { loading, error, clearError, getComics } = useMarvelService();

    useEffect(() => {
        loadComics()
    }, [])

    const onComicsLoaded = (newComics) => {
        setComics(comics => [...comics, ...newComics])
    }

    const loadComics = () => {
        clearError()
        getComics().then(data => setComics(data))
    }

    const loadMore = () => {
        clearError()
        getComics(offset + 9).then(onComicsLoaded)
        setOffset(offset + 9)
    }


    const errorMessage = error ? <ErrorMessage /> : null
    const spinner = loading ? <Spinner /> : null
    const content = !(loading || error || !comics) ? comics.map((item, i) => <li key={item.title+'_'+i} className="comics__item">
        <a href={item.urls[0].url} target='_blank' rel="noreferrer">
            <img src={item.thumbnail.path+'.jpg'} alt="ultimate war" className="comics__item-img" />
            <div className="comics__item-name">{item.title}</div>
            <div className="comics__item-price">{item.prices[0].price}$</div>
        </a>
    </li>) : null
    return (

        <div className="comics__list app">
            <AppHeader />
            <CommicsBanner />
            <ul className="comics__grid">
                {errorMessage}
                {spinner}
                {content}
            </ul>
            <button onClick={loadMore} className="button button__main button__long">
                <div className="inner">load more</div>
            </button>
        </div>
    )
}

export default ComicsList;