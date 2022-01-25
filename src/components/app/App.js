import { useState } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBoundary from '../errorBoundary/errorBoundary';


import decoration from '../../resources/img/vision.png';
import ErrorMessage from '../errorMessage/errorMessage';
import ComicsList from '../comicsList/ComicsList';

const App = () => {

    const [selectedChar, setChar] = useState(null)

    const updateId = (id) => {
        setChar(id)
    }


    return (
        <Router>

            <div className="app">
                <AppHeader />
                <main>

                    <Switch>
                        <Route exact path='/'>
                            <ErrorBoundary>
                                <RandomChar />
                            </ErrorBoundary>
                            <div className="char__content">
                                <ErrorBoundary>
                                    <CharList updateId={updateId} />
                                </ErrorBoundary>
                                <ErrorBoundary>
                                    <CharInfo charId={selectedChar} />
                                </ErrorBoundary>
                            </div>
                            <img className="bg-decoration" src={decoration} alt="vision" />
                        </Route>
                        <Route exact path='/comics'>
                            <ComicsList />
                        </Route>
                    </Switch>

                </main>
            </div>
        </Router>
    )
}

export default App;