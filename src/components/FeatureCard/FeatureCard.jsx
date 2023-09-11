import './FeatureCard.scss';
import { Link } from 'react-router-dom'

const FeatureCard = () => {
    return (
        <div className="card">
            <div className="card__side card__side--front">
                <h2 className="card__heading">Sign up</h2>
                <p className="card__detail">Create your own account</p>
            </div>
            <div className="card__side card__side--back">
                <button className="button button--white">Sign up</button>
                <p className="or">or</p>
                <Link className="login">Log in</Link>
            </div>
        </div>
    )
}

export default FeatureCard;