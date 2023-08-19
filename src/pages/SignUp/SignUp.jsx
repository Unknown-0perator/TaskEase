import './SignUp.scss'
import { Link } from 'react-router-dom';
import logo from '../../assets/logos/1.svg';
import arrowIcon from '../../assets/icons/arrow.svg';
import googleIcon from '../../assets/icons/Google Icon.svg';

const SignUp = () => {
    return (
        <div className="authentication">
            <div className="authentication__container">
                <div className="authentication__header">
                    <img src={logo} alt="" className="authentication__logo" />
                    <h3 className="authentication__heading">We love to see you joining our community</h3>
                </div>
                <div className="form">
                    <input type="text" className="form__input" placeholder='First name' />
                    <input type="text" className="form__input" placeholder='Last name' />
                    <input type="text" className="form__input" placeholder='Your email address' />
                    <input type="text" className="form__input" placeholder='Enter password' />
                    <div className="form__checkbox">
                        <input type="checkbox" name="terms-conditions" id="terms-conditions" className='form__checkbox__input' />
                        <label htmlFor="terms-conditions" className='form__checkbox__label'>I have read and agree to all <Link className='terms-conditions'>Terms & conditions</Link></label>
                    </div>
                    <button className="button__submit">Join now <img src={arrowIcon} alt="" className="button__icon" /></button>
                </div>

                <p className="authentication__or">OR</p>

                <button className="button__google"><img src={googleIcon} alt="" className="button__icon button__icon--google" />Sign in with Google</button>

                <div className="authentication__footer">
                    <Link className='link link__primary'>Sign in today</Link>
                    <Link className="link link__secondary">Lost password?</Link>
                </div>
            </div>
        </div>
    )
}

export default SignUp;