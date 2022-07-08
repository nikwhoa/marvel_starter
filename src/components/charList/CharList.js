import { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import useMarvelService from '../../services/MarvelService';
import './charList.scss';
import Spinner from '../spinner/spinner';
import ErrorMessage from '../errorMessage/errorMessage';
import PropTypes from 'prop-types';

const setContent = (proccess, Component, newItemLoading) => {
    // console.log(proccess);
    switch (proccess) {
        case 'waiting':
            return <Spinner />;

        case 'loading':
            return newItemLoading ? <Component /> : <Spinner />;

        case 'error':
            return <ErrorMessage />;

        case 'confirmed':
            return <Component />;

        default:
            throw new Error('Unknown proccess state');
    }
};

const CharList = (props) => {
    const [charList, setCharList] = useState([]);
    const [newItemLoading, setNewItemLoading] = useState(false);
    const [offset, setOffset] = useState(210);
    const [charEnded, setCharEnded] = useState(false);
    // eslint-disable-next-line no-unused-vars
    const [inProp, setInProp] = useState(false);

    const { getAllCharacters, setProccess, proccess } = useMarvelService();

    useEffect(() => {
        onRequest(offset, true);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onRequest = (offset, initial) => {
        initial ? setNewItemLoading(false) : setNewItemLoading(true);
        getAllCharacters(offset)
            .then(onCharListLoaded)
            .then(() => setProccess('confirmed'));
    };

    const onCharListLoaded = (newCharList) => {
        let ended = false;

        if (newCharList.length < 9) {
            ended = true;
        }

        setCharList((charList) => [...charList, ...newCharList]);
        setNewItemLoading(false);
        setOffset((offset) => offset + 9);
        setCharEnded((charEnded) => ended);
        setInProp(true);
    };

    function renderItems(arr) {
        return (
            <ul className='char__grid'>
                <TransitionGroup component={null}>
                    {arr.map((item) => (
                        <CSSTransition
                            key={item.id}
                            timeout={2000}
                            classNames='animateChars'
                            exit={false}
                        >
                            <li
                                className='char__item'
                                key={item.id}
                                onClick={() => props.updateId(item.id)}
                            >
                                <img
                                    src={item.thumbnail}
                                    alt={item.name}
                                    style={
                                        item.thumbnail ===
                                        'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg'
                                            ? { objectFit: 'contain' }
                                            : null
                                    }
                                />
                                <div className='char__name'>{item.name}</div>
                            </li>
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </ul>
        );
    }

    return (
        <div className='char__list'>
            <ul className='char__grid'>
                {setContent(
                    proccess,
                    () => renderItems(charList),
                    newItemLoading
                )}
            </ul>
            <button
                disabled={newItemLoading}
                onClick={() => onRequest(offset)}
                style={{ display: charEnded ? 'none' : 'block' }}
                className='button button__main button__long'
            >
                <div className='inner'>load more</div>
            </button>
        </div>
    );
};

CharList.propTypes = {
    updateId: PropTypes.func,
};

export default CharList;
