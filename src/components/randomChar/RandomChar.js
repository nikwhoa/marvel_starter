import { useEffect, useState } from 'react';
import './randomChar.scss';
import MarvelService from '../../services/MarvelService';
import mjolnir from '../../resources/img/mjolnir.png';
import Spinner from '../spinner/spinner';
import ErrorMessage from '../errorMessage/errorMessage';

const RandomChar = () => {

    const [char, setChar] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    const marvelService = new MarvelService();

    useEffect(() => {
        updateChar()
    }, [])
    const onRandomChar = () => {
        setLoading(true)
        updateChar()
    }

    const onCharLoaded = (char) => {
        setChar(char)
        setLoading(false)
    }

    const onError = () => {
        setError(true)
        setLoading(false)
    }


    const updateChar = () => {
        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000)
        marvelService
            .getCharacter(id)
            .then(onCharLoaded)
            .catch(onError)
    }


    const errorMessage = error ? <ErrorMessage /> : null
    const spinner = loading ? <Spinner /> : null
    const content = !(loading || error) ? <View char={char} /> : null

    return (
        <div className="randomchar">
            {errorMessage}
            {spinner}
            {content}
            <div className="randomchar__static">
                <p className="randomchar__title">
                    Random character for today!<br />
                    Do you want to get to know him better?
                </p>
                <p className="randomchar__title">
                    Or choose another one
                </p>
                <button onClick={() => onRandomChar()} className="button button__main">
                    <div className="inner">try it</div>
                </button>
                <img src={mjolnir} alt="mjolnir" className="randomchar__decoration" />
            </div>
        </div>
    )
}

const View = ({ char }) => {
    const { name, description, thumbnail, homepage, wiki } = char

    return (
        <div className="randomchar__block">
            <img
                src={thumbnail}
                alt="Random character"
                className="randomchar__img"
                style={thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg' ? { objectFit: 'contain' } : null} />
            <div className="randomchar__info">
                <p className="randomchar__name">{name}</p>
                <p className="randomchar__descr">
                    {description === '' ? 'Sorry, no information about the character' : description}
                </p>
                <div className="randomchar__btns">
                    <a href={homepage} className="button button__main">
                        <div className="inner">homepage</div>
                    </a>
                    <a href={wiki} className="button button__secondary">
                        <div className="inner">Wiki</div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default RandomChar;