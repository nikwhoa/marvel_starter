import { Component } from 'react';
import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";

import decoration from '../../resources/img/vision.png';

class App extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            id: null
        }
    }

    updateId = (id) => {
        this.setState({id})
    }

    render() {
        // console.log(this.state);
        return (
        <div className="app">
            <AppHeader/>
            <main>
                <RandomChar />
                <div className="char__content">
                    <CharList updateId={this.updateId}/>
                    <CharInfo charId={this.state.id}/>
                </div>
                <img className="bg-decoration" src={decoration} alt="vision"/>
            </main>
        </div>
    )
    }
}

export default App;