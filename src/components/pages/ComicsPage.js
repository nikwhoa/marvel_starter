import { Helmet } from 'react-helmet';
import ComicsList from '../comicsList/ComicsList';

const ComicsPage = () => {
    return (
        <>
            <Helmet>
                <title>Comics Page</title>
                <meta name='description' content='Page with comics' />
            </Helmet>
            <ComicsList />
        </>
    );
};

export default ComicsPage;
