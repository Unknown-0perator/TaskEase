import logo from '../../assets/logos/2.svg';

import './Header.scss'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ButtonPrimary } from '../Button/Button';

const Header = ({ isLoggedIn, profileData, setIsLoggedIn }) => {
    const [menuOpen, setMenuOpen] = useState(false)
    const logout = () => {
        sessionStorage.removeItem('authToken');
        setIsLoggedIn(false)
    }

    return (
        <header className="header">
            <div className="header__wrapper">
                <Link to='/' className="header__logo"><img src={logo} alt="" className="header__logo" /></Link>
                <div className={menuOpen ? 'header__menu header__menu--close' : "header__menu"} onClick={() => {
                    setMenuOpen(!menuOpen)
                }}></div>
            </div>
            <nav className={menuOpen ? 'navbar navbar--close' : "navbar"}>
                {!isLoggedIn ? (
                    <ul className='navbar__list'>

                        <li className="navbar__item">
                            <Link to='/' className="navbar__link">Home</Link>
                        </li>
                        <li className="navbar__item">
                            <Link to='/tasks' className="navbar__link">Browse Tasks</Link>
                        </li>
                        <li className="navbar__item">
                            <Link to='login' className="navbar__link">Log in</Link>
                        </li>
                        <li className="navbar__item">
                            <ButtonPrimary to='/sign-up' text='Sign Up' color='yellow' />
                        </li>

                    </ul>
                ) : (
                    <ul className="navbar__list">
                        <li className="navbar__item">
                            <Link to='/' className="navbar__link">Home</Link>
                        </li>
                        <li className="navbar__item">
                            <Link to='tasks' className="navbar__link">Browse tasks</Link>
                        </li>
                        <li className="navbar__item">
                            <Link className="navbar__link">My tasks</Link>
                        </li>
                        <li className="navbar__item">
                            <Link to='post-task' className="navbar__link">Post a task</Link>
                        </li>
                        <li className="navbar__item">
                            <Link to='sign-up' className="navbar__link">Profile</Link>
                        </li>
                        <li className="navbar__item">
                            <ButtonPrimary text='Logout' onClick={logout} color='yellow' />
                        </li>
                    </ul>
                )}
            </nav>
        </header>
    )
}

export default Header;