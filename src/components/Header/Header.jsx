import logo from '../../assets/logos/2.svg';
import menuIcon from '../../assets/icons/menu.svg';

import './Header.scss'
import { useState } from 'react';

const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <header className="header">
            <div className="header__wrapper">
                <img src={logo} alt="" className="header__logo" />
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
                        <a className="navbar__link">Sign up</a>
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