const ErrorMessage = () => {
    return(
        <img className='error-message' src={process.env.PUBLIC_URL + '/error.svg'} alt='error' />
    )
}

export default ErrorMessage