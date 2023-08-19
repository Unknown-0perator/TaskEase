import './AuthenticationComponents.scss';
import logo from '../../assets/logos/1.svg';
import { Link } from 'react-router-dom';


export const AuthenticationHeader = ({ type }) => {
    let text = ''
    if (type === 'sign-up') {
        text = 'We love to see you joining our community';
    } else if (type === 'login') {
        text = 'Welcome! Nice to see you again'
    }
    return (
        <div className="authentication__header">
            <img src={logo} alt="" className="authentication__logo" />
            <h3 className="authentication__heading">{text}</h3>
        </div>
    )
}

export const FormInput = ({ placeholder, name, type }) => {
    return (
        <input type={type} name={name} className="form__input" placeholder={placeholder} />
    )
}

export const Checkbox = () => {
    return (
        <div className="form__checkbox">
            <input type="checkbox" name="terms-conditions" id="terms-conditions" className='form__checkbox__input' />
            <label htmlFor="terms-conditions" className='form__checkbox__label'>I have read and agree to all <Link className='terms-conditions'>Terms & conditions</Link></label>
        </div>
    )
}

export const OrDivider = () => {
    return (
        <p className="authentication__or">OR</p>
    )
}


export const AuthenticationFooter = ({ type }) => {
    let to = '';
    let text = '';
    if (type === 'sign-up') {
        to = 'login';
        text = 'Sign in today'
    } else if (type === 'login') {
        to = 'sign-up';
        text = 'Join us today'
    }
    return (
        <div className="authentication__footer">
            <Link to={to} className='link link__primary'>{text}</Link>
            <Link className="link link__secondary">Lost password?</Link>
        </div>
    )
}
