import arrowIcon from '../../assets/icons/arrow.svg';
import googleIcon from '../../assets/icons/Google Icon.svg';
import { Link } from 'react-router-dom';
import './Button.scss';


//Button Primary
export const ButtonPrimary = ({ text, color, to, onClick }) => {
    return (
        <Link to={to} onClick={onClick} className={`button button__primary button__primary--${color}`}>{text}</Link>
    )
}

// Button for Login and Sign up
export const ButtonAuthentication = ({ text, type }) => {
    return (
        <button type={type} className="button button__submit">{text} <img src={arrowIcon} alt="" className="button__icon" /></button>
    )
}

// Button for google OAuth
export const ButtonGoogle = () => {
    return (
        <button className="button button__google"><img src={googleIcon} alt="" className="button__icon button__icon--google" />Sign in with Google</button>
    )
}