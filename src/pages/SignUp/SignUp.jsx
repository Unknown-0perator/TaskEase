import './SignUp.scss'
import { AuthenticationFooter, OrDivider, AuthenticationHeader, FormInput, Checkbox } from '../../components/AuthenticationComponents/AuthenticationComponents';
import { ButtonAuthentication, ButtonGoogle } from '../../components/Button/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
    const [checkbox, setCheckbox] = useState(true)
    let navigate = useNavigate();

    const [signUpForm, setSignUpForm] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: ''
    })

    const handleInputChange = (event) => {
        setSignUpForm({
            ...signUpForm, [event.target.name]: event.target.value
        })
    }

    const API_URL = process.env.REACT_APP_BACKEND_URL;
    const handleFormSubmit = (event) => {
        event.preventDefault();
        axios.post(`${API_URL}/users/sign-up`, {
            first_name: signUpForm.first_name,
            last_name: signUpForm.last_name,
            email: signUpForm.email,
            password: signUpForm.password
        }).catch((e) => {
            console.log(e)
        })

        alert('user created successfully')
        setSignUpForm('')
        navigate('/')
    }

    return (
        <div className="authentication margin-header">
            <div className="authentication__container">
                <AuthenticationHeader type='sign-up' />
                <form className="form" onSubmit={handleFormSubmit}>
                    <FormInput onChange={handleInputChange} name='first_name' placeholder='First name' type='text' />
                    <FormInput onChange={handleInputChange} name='last_name' placeholder='Last name' type='text' />
                    <FormInput onChange={handleInputChange} name='email' placeholder='Your email address' type='email' />
                    <FormInput onChange={handleInputChange} name='password' placeholder='Enter password' type='password' />
                    <Checkbox type='sign-up' setCheckbox={setCheckbox} />
                    <ButtonAuthentication text='Join Now' type="submit" disabled={checkbox} />
                </form>

                <OrDivider />

                <ButtonGoogle />

                <AuthenticationFooter type='sign-up' />
            </div>
        </div>
    )
}

export default SignUp;