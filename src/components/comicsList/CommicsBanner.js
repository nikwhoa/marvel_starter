import avengers from './avangers.png'
import avengersLogo from './Avengers logo.png'

const CommicsBanner = () => {
    return(
        <div className="comics__banner">
            <div className="banner__avengers">
                <img src={avengers} alt="avengers" />
            </div>
            <div className="banner__newcomics">
                <h2>New comics every week! Stay tuned!</h2>
            </div>
            <div className="banner__logo">
                <img src={avengersLogo} alt="avengers logo" />
            </div>
        </div>
    )
}

export default CommicsBanner