import { useState } from "react";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBoundary from '../errorBoundary/errorBoundary';
import SearchForm from '../searchChar/SearchForm';
import decoration from '../../resources/img/vision.png';
import { Helmet } from "react-helmet";

const MainPage = () => {

    const [selectedChar, setChar] = useState(null)

    const updateId = (id) => {
        setChar(id)
    }

    return (
        <>
            <Helmet>
                <title>Main Page</title>
                <meta name="description" content="Marvel portal" />
            </Helmet>
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
                <ErrorBoundary>
                    <SearchForm />
                </ErrorBoundary>
            </div>
            <img className="bg-decoration" src={decoration} alt="vision" />
        </>
    )
}

export default MainPage