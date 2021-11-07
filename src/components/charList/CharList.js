import { Component } from 'react';
import MarvelService from '../../services/MarvelService';
import './charList.scss';
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
    }

    onCharLoaded = (char) => {
        this.setState({ char, loading: false }) // this.setState({char: char}) то же самое 
        // this.props.updateId(this.state.char.map(item => item.id))
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
        const content = !(loading || error) ? <View updateId={this.props.updateId} char={char} /> : null
        
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

const View = ({ char, updateId }) => {
    const charItem = char.map(item => {
        return (
            <li key={item.id}
            className="char__item"
            onClick={() => updateId(item.id)}>
                <img style={item.thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg' ? { objectFit: 'contain' } : null} src={item.thumbnail} alt={item.name} />
                <div className="char__name">{item.name}</div>
            </li>
        )
    })
    
    return (
        <>
            {charItem}
        </>
    )
}


export default CharList;