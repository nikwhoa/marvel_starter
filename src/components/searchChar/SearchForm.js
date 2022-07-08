import './form.scss';
import { Formik, Form, Field } from 'formik';
import useMarvelService from '../../services/MarvelService';
// eslint-disable-next-line no-unused-vars
import { useEffect, useState } from 'react';
import {gettingChar} from '../pages/CharPage';
import { Link } from 'react-router-dom';

const SearchForm = () => {
    const { searchForChar } = useMarvelService();
    const [foundCharacter, setCharacter] = useState(null);

    const getChar = gettingChar;

    useEffect(() => {
        getChar(foundCharacter);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [foundCharacter]);



    const validate = (value) => {
        let errorMessage;
        if (/\d/g.test(value)) {
            errorMessage = 'Please enter a valid name';
        } else if (value.length <= 2) {
            errorMessage = 'Please enter at least 3 characters';
        }
        return errorMessage;
    };

    return (
        <div className='search-form'>
            <Formik
                initialValues={{ search: '' }}
                onSubmit={(value) => {
                    searchForChar(value.search).then((res) => {
                        if (res) {
                            setCharacter(res);
                        } else {
                            setCharacter(false)
                        }
                    });
                }}
            >
                {({ errors, touched, validateForm }) => (
                    <Form>
                        <label htmlFor='search'>
                            Find a character by name:
                        </label>
                        <Field
                            name='search'
                            type='text'
                            validate={validate}
                            placeholder='Search...'
                        />
                        {errors.search && touched.search && (
                            <span className='search-error'>
                                {errors.search}
                            </span>
                        )}
                        <button className='button button__main' type='submit'>
                            <div className='inner'>find</div>
                        </button>
                    </Form>
                )}
            </Formik>

            <div className='search-output'>
                {foundCharacter === false ? <div>No found</div> : (
                    foundCharacter ? <>Charater {foundCharacter.name} found. To get more info click  <Link className='link' to={'/chars/'+foundCharacter.name}>the link</Link></> : null
                )}
            </div>
        </div>
    );
};

export default SearchForm;
