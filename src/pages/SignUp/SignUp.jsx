import './SignUp.scss'
import { AuthenticationFooter, OrDivider, AuthenticationHeader, FormInput, Checkbox } from '../../components/AuthenticationComponents/AuthenticationComponents';
import { ButtonAuthentication, ButtonGoogle } from '../../components/Button/Button';
import { useState } from 'react';

const SignUp = () => {

    const [signUpForm, setSignUpForm] = useState({
        f_name: '',
        l_name: '',
        email: '',
        password: ''
    })

    const handleInputChange = (event) => {
        setSignUpForm({
            ...signUpForm, [event.target.name]: event.target.value
        })
        console.log(event.target.value)
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log('submitted')
    }

    return (
        <div className="authentication">
            <div className="authentication__container">
                <AuthenticationHeader type='sign-up' />
                <form className="form" onSubmit={handleFormSubmit}>
                    <FormInput onChange={handleInputChange} name='f_name' placeholder='First name' type='text' />
                    <FormInput onChange={handleInputChange} name='l_name' placeholder='Last name' type='text' />
                    <FormInput onChange={handleInputChange} name='email' placeholder='Your email address' type='email' />
                    <FormInput onChange={handleInputChange} name='password' placeholder='Enter password' type='password' />
                    <Checkbox type='sign-up' />
                    <ButtonAuthentication text='Join Now' type="submit" />
                </form>

                <OrDivider />

                <ButtonGoogle />

                <AuthenticationFooter type='sign-up' />
            </div>
        </div>
    )
}

export default SignUp;