import { useEffect, useState } from 'react';

import useMarvelService from '../../services/MarvelService';
import Spinner from '../spinner/spinner';
import ErrorMessage from '../errorMessage/errorMessage';
import PropTypes from 'prop-types';

import './charInfo.scss';
import Skeleton from '../skeleton/Skeleton';

const CharInfo = (props) => {

    const [char, setChar] = useState(null)

    const {loading, error, getCharacter, clearError} = useMarvelService();

    useEffect(() => {
        updateChar(props.charId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.charId])


    const onCharLoaded = (char) => {
        setChar(char)
    }



    const updateChar = (id) => {
        clearError()
        if (!id) {
            return
        }

        getCharacter(id).then(onCharLoaded)
    }


    const skeleton = char || loading || error ? null : <Skeleton />
    const errorMessage = error ? <ErrorMessage /> : null
    const spinner = loading ? <Spinner /> : null
    const content = !(loading || error || !char) ? <View char={char} /> : null

    return (
        <div className="char__info">
            {skeleton}
            {errorMessage}
            {spinner}
            {content}
        </div>
    )

}

const View = ({ char }) => {

    const { name, description, thumbnail, homepage, wiki, comics } = char

    // console.log(comics);

    return (
        <>
            <div className="char__basics">
                <img src={thumbnail} alt={name}
                    style={thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg' ? { objectFit: 'contain' } : null} />
                <div>
                    <div className="char__info-name">{name}</div>
                    <div className="char__btns">
                        <a href={homepage} className="button button__main">
                            <div className="inner">homepage</div>
                        </a>
                        <a href={wiki} className="button button__secondary">
                            <div className="inner">Wiki</div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="char__descr">
                {description === '' ? 'Sorry, no information about the character' : description}
            </div>
            <div className="char__comics">Comics:</div>
            <ul className="char__comics-list">
                {comics.length === 0 ? 'There are no comics' :

                    comics.map((item, i) => {
                        return (
                            <li key={i} className="char__comics-item">
                                {item}
                            </li>
                        )
                    })
                }

            </ul>
        </>
    )
}

CharInfo.propTypes = {
    charId: PropTypes.number
}


export default CharInfo;