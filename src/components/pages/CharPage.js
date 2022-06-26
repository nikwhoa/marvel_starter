import './charPage.scss';
import { Helmet } from 'react-helmet';


let character = {}
const gettingChar = (char) => {
    character = char
};

const CharPage = (props) => {

    return (
        <div className='char-wrapper'>
            <Helmet>
                <title>{character.name}</title>
            </Helmet>
            <h1>{character.name}</h1>
            <img src={character.thumbnail+'.jpg'} alt={character.name} />
            <p>{character.description.length !== 0 ? character.description : 'Sorry no description' }</p>
        </div>
    );
};

export { CharPage, gettingChar };
