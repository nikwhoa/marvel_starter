import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useEffect, useState } from 'react';

import useMarvelService from '../../services/MarvelService';

import setContent from '../../utils/setContent';

import './singleComicPage.scss';

const SingleComicPage = () => {
    const { comicID } = useParams();

    const [comic, setComic] = useState(null);

    const { getComic, clearError, proccess, setProccess } = useMarvelService();

    useEffect(() => {
        updateComic(comicID);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [comicID]);

    const updateComic = (id) => {
        clearError();
        getComic(id)
            .then(onComicLoaded)
            .then(() => setProccess('confirmed'));
    };

    const onComicLoaded = (comic) => {
        setComic(comic);
    };

    return <>{setContent(proccess, View, comic)}</>;
};

const View = ({ data }) => {
    const { title, description, pageCount, thumbnail, textObjects, prices } =
        data;
    return (
        <div className='single-comic'>
            <Helmet>
                <title>{title}</title>
                <meta name='description' content={description} />
            </Helmet>
            <img
                src={`${thumbnail.path}.jpg`}
                alt={title}
                className='single-comic__img'
            />
            <div className='single-comic__info'>
                <h2 className='single-comic__name'>{title}</h2>
                <p className='single-comic__descr'>{description}</p>
                <p className='single-comic__descr'>{pageCount} pages</p>
                <p className='single-comic__descr'>
                    Language: {`${textObjects.language || 'en-us'}`}
                </p>
                <div className='single-comic__price'>{prices[0].price}$</div>
            </div>
            <Link to='/comics' className='single-comic__back'>
                Back to all
            </Link>
        </div>
    );
};

export default SingleComicPage;
