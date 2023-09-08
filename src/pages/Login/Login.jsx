import './Login.scss';
import { AuthenticationFooter, OrDivider, AuthenticationHeader, FormInput, Checkbox } from '../../components/AuthenticationComponents/AuthenticationComponents';
import { ButtonAuthentication, ButtonGoogle } from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const Login = ({ isLoggedIn, setIsLoggedIn, setProfileData }) => {

    let navigate = useNavigate();

    const [loginForm, setLoginForm] = useState({
        email: '',
        password: ''
    })

    const handleInputChange = (event) => {
        setLoginForm({
            ...loginForm, [event.target.name]: event.target.value
        })
    }

    const API_URL = process.env.REACT_APP_BACKEND_URL;

    const handleFormSubmit = (event) => {
        event.preventDefault();
        axios.post(`${API_URL}/auth/login`, {
            email: loginForm.email,
            password: loginForm.password
        }).then((response) => {
            const authToken = response.data.token;
            sessionStorage.authToken = authToken;
            setProfileData(response.data.user[0])
            setTimeout(() => {
                setIsLoggedIn(true);
                navigate('/');
            }, 1000)

        }).catch(err => console.log("login error", err.response.data))

        setLoginForm('')
        navigate('/')

    }


    return (

        <div>
            {!isLoggedIn ? (

                <div className="authentication margin-header">
                    <div className="authentication__container">
                        <AuthenticationHeader type='login' />
                        <form className="form" onSubmit={handleFormSubmit}>
                            <FormInput onChange={handleInputChange} name='email' placeholder='Your Email' type='email' />
                            <FormInput onChange={handleInputChange} name='password' placeholder='Your Password' type='password' />
                            <Checkbox type='login' />
                            <ButtonAuthentication text='Login Now' type="submit" />
                        </form>

                        <OrDivider />

                        <ButtonGoogle />

                        <AuthenticationFooter type='login' />
                    </div>
                </div>
            ) : (
                <>
                    {navigate('/')}
                </>
            )}
        </div>


    )
}

export default Login;