import logo from '../../assets/logos/2.svg';

import './Header.scss'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <header className="header">
            <div className="header__wrapper">
                <Link to='/' className="header__logo"><img src={logo} alt="" className="header__logo" /></Link>
                <div className={menuOpen ? 'header__menu header__menu--close' : "header__menu"} onClick={() => {
                    setMenuOpen(!menuOpen)
                }}></div>
            </div>
            <nav className={menuOpen ? 'navbar navbar--close' : "navbar"}>
                <ul className='navbar__list'>
                    <li className="navbar__item">
                        <a className="navbar__link">Browse tasks</a>
                    </li>
                    <li className="navbar__item">
                        <a className="navbar__link">How it works</a>
                    </li>
                    <li className="navbar__item">
                        <Link to='sign-up' className="navbar__link">Sign up</Link>
                    </li>
                    <li className="navbar__item">
                        <a className="navbar__link">Log in</a>
                    </li>
                    <li className="navbar__item">
                        <button className="button">Become a Task helper</button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;