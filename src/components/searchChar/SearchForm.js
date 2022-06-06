import './form.scss';
import { Formik, Form, Field } from 'formik';
import useMarvelService from '../../services/MarvelService';
// eslint-disable-next-line no-unused-vars
import { useEffect, useState } from 'react';

const SearchForm = () => {
    const { searchForChar } = useMarvelService();
    const [foundCharacter, setCharacter] = useState(null);
    const output = (foundCharacter) => {
        if (foundCharacter === 'no found') {
            return <div>No character found</div>;
        } else if (foundCharacter === false) {
            return <div>Please enter at least 3 characters</div>;
        } else if (foundCharacter === null) {
            return '';
        } else {
            return (
                'Charater ' +
                foundCharacter[0] +
                ' found. To get more follow the link.'
            );
        }
    };

    return (
        <Formik
            initialValues={{ search: '' }}
            onSubmit={(values) => {
                searchForChar(values.search).then((res) => {
                    if (res === false) {
                        setCharacter(false);
                    } else if (res.length < 1) {
                        setCharacter('no found');
                    } else {
                        const char = [
                            res.name,
                            res.description,
                            res.thumbnail,
                            res.id,
                        ];
                        setCharacter(char);
                    }
                });
                // let result = searchForChar(values.search);
                // console.log(searchForChar(values.search));
                // setCharacter(result);
            }}
        >
            <div className='search-form'>
                <Form className='form'>
                    <label htmlFor='search'>Or find a character by name:</label>
                    <Field type='text' name='search' placeholder='Search...' />
                    <button className='button button__main' type='submit'>
                        <div className='inner'>find</div>
                    </button>
                </Form>
                <div className='search-output'>
                    <b>{output(foundCharacter)}</b>
                </div>
            </div>
        </Formik>
    );
};

export default SearchForm;
