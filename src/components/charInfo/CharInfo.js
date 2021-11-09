import { Component } from 'react';

import MarvelService from '../../services/MarvelService';
import Spinner from '../spinner/spinner';
import ErrorMessage from '../errorMessage/errorMessage';

import './charInfo.scss';
import Skeleton from '../skeleton/Skeleton';

class CharInfo extends Component {

    state = {
        char: null,
        loading: false,
        error: false
    }

    marvelService = new MarvelService();


    componentDidMount() {
        this.updateChar()
    }

    componentDidUpdate(prevProps) {
        // this.updateChar()
        if (this.props.charId !== prevProps.charId) {
            this.updateChar()
        }
    }

    onCharLoaded = (char) => {
        this.setState({ char, loading: false }) // this.setState({char: char}) то же самое 
    }

    onError = () => {
        this.setState({ loading: false, error: true })
    }

    onCharLoading = () => {
        this.setState({ loading: true })
    }

    updateChar = () => {
        const { charId } = this.props
        if (!charId) {
            return
        }
        this.onCharLoading()
        this.marvelService
            .getCharacter(charId)
            .then(this.onCharLoaded)
            .catch(this.onError)
    }

    componentDidCatch(err, info) {
        console.log(err, info);
        this.setState({
            error: true
        })
    }

    render() {

        const { char, loading, error } = this.state

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
                { comics.length === 0 ? 'There are no comics' :
                       
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

export default CharInfo;