import { Component, useEffect, useState } from 'react';

import MarvelService from '../../services/MarvelService';
import Spinner from '../spinner/spinner';
import ErrorMessage from '../errorMessage/errorMessage';
import PropTypes from 'prop-types';

import './charInfo.scss';
import Skeleton from '../skeleton/Skeleton';

const CharInfo = (props) => {
    
    const [char, setChar] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const marvelService = new MarvelService();

    useEffect(() => {
        updateChar(props.charId);
    }, [props.charId])

    // componentDidUpdate(prevProps) {
    //     if (this.props.charId !== prevProps.charId) {
    //         this.updateChar()
    //     }
    // }

    const onCharLoaded = (char) => {
        setChar(char)
        setLoading(false)
    }

    const onError = () => {
        setError(true)
        setLoading(false)
    }

    const onCharLoading = () => {
        setLoading(true)
    }

    const updateChar = (id) => {
        if (!id) {
            return
        }
        onCharLoading()
        marvelService.getCharacter(id).then(onCharLoaded).catch(onError)
    }

    // componentDidCatch(err, info) {
    //     console.log(err, info);
    //     this.setState({
    //         error: true
    //     })
    // }

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