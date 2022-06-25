import './charPage.scss';

let character = {}
const gettingChar = (char) => {
    character = char
};

const CharPage = (props) => {
    console.log(character.description.length);
    return (
        <div className='char-wrapper'>
            <h1>{character.name}</h1>
            <img src={character.thumbnail+'.jpg'} alt={character.name} />
            <p>{character.description.length !== 0 ? character.description : 'Sorry no description' }</p>
        </div>
    );
};

export { CharPage, gettingChar };
