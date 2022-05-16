import './form.scss'
import { Formik, Form, Field } from 'formik'
import useMarvelService from '../../services/MarvelService'

const SearchForm = () => {

    const {searchForChar} = useMarvelService()

    return (
        <Formik
            initialValues={{ 'search': '' }}
            onSubmit={values => console.log(searchForChar(values.search))}
        >
            <div className="search-form">
                <Form className='form' >
                    <label htmlFor="search">Or find a character by name:</label>
                    <Field type="text" name="search" placeholder="Search..." />
                    <button className="button button__main" type='submit'><div className="inner">find</div></button>
                </Form>
            </div>
        </Formik>
    )
}

export default SearchForm