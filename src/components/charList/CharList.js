import { Component } from 'react';
import MarvelService from '../../services/MarvelService';
import './charList.scss';
import abyss from '../../resources/img/abyss.jpg';
import Spinner from '../spinner/spinner';
import ErrorMessage from '../errorMessage/errorMessage';

class CharList extends Component {

    state = {
        char: {},
        loading: true,
        error: false
    }

    marvelService = new MarvelService();

    componentDidMount() {
        this.updateChar();
        console.log('mount CharList');
        // this.onRandomChar();
        // this.timerId = setInterval(this.updateChar, 33000)
    }

     onCharLoaded = (char) => {
        this.setState({ char, loading: false }) // this.setState({char: char}) то же самое 
    }

    onError = () => {
        this.setState({ loading: false, error: true })
    }


    updateChar = () => {
        
        this.marvelService
            .getAllCharacters()
            .then(this.onCharLoaded)
            .catch(this.onError)
    }


    render() {
        
        const { char, loading, error } = this.state
        const errorMessage = error ? <ErrorMessage /> : null
        const spinner = loading ? <Spinner /> : null
        const content = !(loading || error) ? <View char={char} /> : null

        return (
        <div className="char__list">
            <ul className="char__grid">
            {errorMessage}
            {spinner}
            {content}
            </ul>
            <button className="button button__main button__long">
                <div className="inner">load more</div>
            </button>
        </div>
    )        
    }
    
}

const View = ({ char }) => {
    const charItem = char.map( item => {
        return(
                <li className="char__item">
                    <img style={item.thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg' ? {objectFit: 'contain'} : null} src={item.thumbnail} alt={item.name}/>
                    <div className="char__name">{item.name}</div>
                </li>  
            )
    })
    console.log(charItem)
    return (
     <>
     {charItem}
     </>
    )
}


export default CharList;