import logo from '../../assets/logos/2.svg';
import './Header.scss'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ButtonPrimary } from '../Button/Button';


const Header = ({ isLoggedIn, setIsLoggedIn }) => {
    const [menuOpen, setMenuOpen] = useState(false)
    const logout = () => {
        sessionStorage.removeItem('authToken');
        setIsLoggedIn(false)
    }

    const menuClose = () => {
        setMenuOpen(false);
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
                            <Link to='/' onClick={menuClose} className="navbar__link">Home</Link>
                        </li>
                        <li className="navbar__item">
                            <Link to='/tasks' onClick={menuClose} className="navbar__link">Browse Tasks</Link>
                        </li>
                        <li className="navbar__item">
                            <Link to='login' onClick={menuClose} className="navbar__link">Log in</Link>
                        </li>
                        <li className="navbar__item">
                            <ButtonPrimary to='/sign-up' onClick={menuClose} text='Sign Up' color='yellow' />
                        </li>

                    </ul>
                ) : (
                    <ul className="navbar__list">
                        <li className="navbar__item">
                            <Link to='/' onClick={menuClose} className="navbar__link">Home</Link>
                        </li>
                        <li className="navbar__item">
                            <Link to='tasks' onClick={menuClose} className="navbar__link">Browse tasks</Link>
                        </li>
                        <li className="navbar__item">
                            <Link to='post-task' onClick={menuClose} className="navbar__link">Post a task</Link>
                        </li>
                        <li className="navbar__item">
                            <Link to='profile' onClick={menuClose} className="navbar__link">Profile</Link>
                        </li>
                        <li className="navbar__item">
                            <ButtonPrimary to='/' text='Logout' onClick={() => {
                                logout();
                                menuClose();
                            }} color='yellow' />
                        </li>
                    </ul>
                )}
            </nav>
        </header>
    )
}

export default Header;