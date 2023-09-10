import './Login.scss';
import { AuthenticationFooter, OrDivider, AuthenticationHeader, FormInput, Checkbox } from '../../components/AuthenticationComponents/AuthenticationComponents';
import { ButtonAuthentication, ButtonGoogle } from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const Login = ({ isLoggedIn, setIsLoggedIn, setProfileData, API_URL }) => {

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

    const handleFormSubmit = (event) => {
        event.preventDefault();
        axios.post(`${API_URL}/auth/login`, {
            email: loginForm.email,
            password: loginForm.password
        }).then((response) => {
            if (response.status !== 403) {
                event.target.innerHTML = '<div class="lds-ring"><div></div><div></div><div></div><div></div></div>'
                const authToken = response.data.token;
                sessionStorage.authToken = authToken;
                setProfileData(response.data.user)
                setTimeout(() => {
                    setIsLoggedIn(true);
                    navigate('/profile');
                }, 2500)
            }
        }).catch(err => alert(`Error: ${err.message}`))

        event.target.reset();
        setLoginForm('')

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
                <div className="authentication margin-header">
                    <div className="authentication__container">
                        <AuthenticationHeader type='logged-in' />


                        <AuthenticationFooter type='logged-in' />
                    </div>
                </div>
            )}
        </div>


    )
}

export default Login;