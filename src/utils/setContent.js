import Skeleton from '../components/skeleton/Skeleton';
import Spinner from '../components/spinner/spinner';
import ErrorMessage from '../components/errorMessage/errorMessage';

const setContent = (proccess, Component, data) => {
    console.log(proccess);
    switch (proccess) {
        case 'waiting':
            return <Skeleton />;

        case 'loading':
            return <Spinner />;

        case 'error':
            return <ErrorMessage />;

        case 'confirmed':
            return <Component data={data} />;

        default:
            throw new Error('Unknown proccess state');
    }
};

export default setContent;
