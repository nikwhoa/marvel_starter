import { Component } from 'react';
import MarvelService from '../../services/MarvelService';
import './charList.scss';
import Spinner from '../spinner/spinner';
import ErrorMessage from '../errorMessage/errorMessage';

class CharList extends Component {

    state = {
        charList: [],
        loading: true,
        error: false,
        newItemLoading: false,
        offset: 1548,
        charEnded: false
    }



    marvelService = new MarvelService();

    componentDidMount() {
        this.onRequest()
    }



    onError = () => {
        this.setState({ loading: false, error: true })
    }

    onRequest = (offset) => {
        this.onCharListLoading()
        this.marvelService
            .getAllCharacters(offset)
            .then(this.onCharListLoaded)
            .catch(this.onError)
    }

    onCharListLoading = () => {
        this.setState({
            newItemLoading: true
        })
    }

    onCharListLoaded = (newCharList) => {
        let ended = false

        if (newCharList.length < 9) {
            ended = true
        }


        this.setState(({ charList, offset }) => ({
            charList: [...charList, ...newCharList],
            loading: false,
            newItemLoading: false,
            offset: offset + 9,
            charEnded: ended
        }))
    }


    renderItems(arr) {
        const items = arr.map((item) => {

            return (
                <li
                    className="char__item"
                    key={item.id}
                    onClick={() => this.props.updateId(item.id)}>
                    <img src={item.thumbnail} alt={item.name} style={item.thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg' ? { objectFit: 'contain' } : null} />
                    <div className="char__name">{item.name}</div>
                </li>
            )

        });
        // А эта конструкция вынесена для центровки спиннера/ошибки
        return (
            <ul className="char__grid">
                {items}
            </ul>
        )
    }

    render() {

        const { charList, loading, error, newItemLoading, offset, charEnded } = this.state
        console.log(this.state);
        const items = this.renderItems(charList);

        const errorMessage = error ? <ErrorMessage /> : null
        const spinner = loading ? <Spinner /> : null
        const content = !(loading || error) ? items : null

        return (
            <div className="char__list">
                <ul className="char__grid">
                    {errorMessage}
                    {spinner}
                    {content}
                </ul>
                <button
                    disabled={newItemLoading}
                    onClick={() => this.onRequest(offset)}
                    style={{'display': charEnded ? 'none' : 'block'}}
                    className="button button__main button__long">
                    <div className="inner">load more</div>
                </button>
            </div>
        )
    }

}

// const View = ({ char, updateId }) => {
//     const charItem = char.map(item => {
//         return (
//             <li key={item.id}
//             className="char__item"
//             onClick={() => updateId(item.id)}>
//                 <img style={item.thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg' ? { objectFit: 'contain' } : null} src={item.thumbnail} alt={item.name} />
//                 <div className="char__name">{item.name}</div>
//             </li>
//         )
//     })

//     return (
//         <>
//             {charItem}
//         </>
//     )
// }


export default CharList;