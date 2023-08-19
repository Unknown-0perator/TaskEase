import './Login.scss';
import { AuthenticationFooter, OrDivider, AuthenticationHeader, FormInput, Checkbox } from '../../components/AuthenticationComponents/AuthenticationComponents';
import { ButtonAuthentication, ButtonGoogle } from '../../components/Button/Button';

const Login = () => {
    return (
        <div className="authentication">
            <div className="authentication__container">
                <AuthenticationHeader type='login' />
                <div className="form">
                    <FormInput name='' placeholder='Your Email' type='email' />
                    <FormInput name='' placeholder='Your Password' type='password' />
                    <Checkbox type='login' />
                    <ButtonAuthentication text='Login Now' />
                </div>

                <OrDivider />

                <ButtonGoogle />

                <AuthenticationFooter type='login' />
            </div>
        </div>
    )
}

export default Login;