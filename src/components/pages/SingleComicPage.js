import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useEffect, useState } from 'react';

import useMarvelService from '../../services/MarvelService';
import Spinner from '../spinner/spinner';
import ErrorMessage from '../errorMessage/errorMessage';

import './singleComicPage.scss';

const SingleComicPage = () => {

    const { comicID } = useParams()

    const [comic, setComic] = useState(null)

    const { loading, error, getComic, clearError } = useMarvelService();


    useEffect(() => {
        updateComic(comicID);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [comicID])



    const updateComic = (id) => {
        clearError()
        getComic(id).then(onComicLoaded)
    }

    const onComicLoaded = (comic) => {
        setComic(comic)
    }

    const errorMessage = error ? <ErrorMessage /> : null
    const spinner = loading ? <Spinner /> : null
    const content = !(loading || error || !comic) ? <View comic={comic} /> : null

    return (
        <>
            {errorMessage}
            {spinner}
            {content}
        </>
    )
}

const View = ({ comic }) => {
    const { title, description, pageCount, thumbnail, textObjects, prices } = comic
    console.log(comic);
    return (
        <div className="single-comic">
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={description} />
            </Helmet>
            <img src={`${thumbnail.path}.jpg`} alt={title} className="single-comic__img" />
            <div className="single-comic__info">
                <h2 className="single-comic__name">{title}</h2>
                <p className="single-comic__descr">{description}</p>
                <p className="single-comic__descr">{pageCount} pages</p>
                <p className="single-comic__descr">Language: {`${textObjects.language || 'en-us'}`}</p>
                <div className="single-comic__price">{prices[0].price}$</div>
            </div>
            <Link to='/comics' className="single-comic__back">Back to all</Link>
        </div>
    )
}

export default SingleComicPage;