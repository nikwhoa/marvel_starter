import ErrorMessage from "../errorMessage/errorMessage"
import { Link } from "react-router-dom"

const Page404 = () => {
    return(
        <div style={{textAlign: 'center'}}>
            <ErrorMessage />
            <p style={{textAlign: 'center'}}>Page doesn't exist</p>
            <Link style={{textAlign: 'center', display: 'block', marginTop: '30px', color: '#6090db'}} to='/'>Back to main page</Link>
        </div>
    )
}

export default Page404