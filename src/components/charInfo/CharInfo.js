import { useEffect, useState } from 'react';
import useMarvelService from '../../services/MarvelService';
import PropTypes from 'prop-types';
import './charInfo.scss';
import setContent from '../../utils/setContent';

const CharInfo = (props) => {
    const [char, setChar] = useState(null);

    const { getCharacter, clearError, proccess, setProccess } =
        useMarvelService();

    useEffect(() => {
        updateChar(props.charId);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.charId]);

    const onCharLoaded = (char) => {
        setChar(char);
    };

    const updateChar = (id) => {
        clearError();
        if (!id) {
            return;
        }

        getCharacter(id)
            .then(onCharLoaded)
            .then(() => setProccess('confirmed'));
    };

    return <div className='char__info'>{setContent(proccess, View, char)}</div>;
};

const View = ({ data }) => {
    const { name, description, thumbnail, homepage, wiki, comics } = data;

    return (
        <>
            <div className='char__basics'>
                <img
                    src={thumbnail}
                    alt={name}
                    style={
                        thumbnail ===
                        'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg'
                            ? { objectFit: 'contain' }
                            : null
                    }
                />
                <div>
                    <div className='char__info-name'>{name}</div>
                    <div className='char__btns'>
                        <a href={homepage} className='button button__main'>
                            <div className='inner'>homepage</div>
                        </a>
                        <a href={wiki} className='button button__secondary'>
                            <div className='inner'>Wiki</div>
                        </a>
                    </div>
                </div>
            </div>
            <div className='char__descr'>
                {description === ''
                    ? 'Sorry, no information about the character'
                    : description}
            </div>
            <div className='char__comics'>Comics:</div>
            <ul className='char__comics-list'>
                {comics.length === 0
                    ? 'There are no comics'
                    : comics.map((item, i) => {
                          return (
                              <li key={i} className='char__comics-item'>
                                  {item}
                              </li>
                          );
                      })}
            </ul>
        </>
    );
};

CharInfo.propTypes = {
    charId: PropTypes.number,
};

export default CharInfo;
