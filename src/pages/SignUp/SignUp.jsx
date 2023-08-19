import './SignUp.scss'
import { AuthenticationFooter, OrDivider, AuthenticationHeader, FormInput, Checkbox } from '../../components/AuthenticationComponents/AuthenticationComponents';
import { ButtonAuthentication, ButtonGoogle } from '../../components/Button/Button';

const SignUp = () => {
    return (
        <div className="authentication">
            <div className="authentication__container">
                <AuthenticationHeader type='sign-up' />
                <div className="form">
                    <FormInput name='' placeholder='First name' type='text' />
                    <FormInput name='' placeholder='Last name' type='text' />
                    <FormInput name='' placeholder='Your email address' type='text' />
                    <FormInput name='' placeholder='Enter password' type='text' />
                    <Checkbox type='sign-up' />
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