import './SignUp.scss'
import { Link } from 'react-router-dom';
import logo from '../../assets/logos/1.svg';
import { AuthenticationFooter, OrDivider } from '../../components/AuthenticationComponents/AuthenticationComponents';
import { ButtonAuthentication, ButtonGoogle } from '../../components/Button/Button';

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
                    <ButtonAuthentication text='Join Now' />
                </div>

                <OrDivider />

                <ButtonGoogle />

                <AuthenticationFooter type='sign-up' />
            </div>
        </div>
    )
}

export default SignUp;