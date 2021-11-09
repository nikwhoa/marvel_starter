import { Component } from 'react';
import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBoundary from '../errorBoundary/errorBoundary';


import decoration from '../../resources/img/vision.png';
import ErrorMessage from '../errorMessage/errorMessage';

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: null
        }
    }

    updateId = (id) => {
        this.setState({ id })
    }

    render() {
        // console.log(this.state);
        return (
            <div className="app">
                <AppHeader />
                <main>
                    <ErrorBoundary>
                        <RandomChar />
                    </ErrorBoundary>
                    <div className="char__content">
                        <ErrorBoundary>
                            <CharList updateId={this.updateId} />
                        </ErrorBoundary>
                        <ErrorBoundary>
                            <CharInfo charId={this.state.id} />
                        </ErrorBoundary>
                    </div>
                    <img className="bg-decoration" src={decoration} alt="vision" />
                </main>
            </div>
        )
    }
}

export default App;