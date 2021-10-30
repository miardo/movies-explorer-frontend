import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import Navigation from '../Navigation/Navigation';
import "./Header.css";
import logo from "../../images/header-logo.svg";

function Header(props) {
    let location = useLocation();

    return (
        <header className={`header ${location.pathname !== '/' && 'header_login'} ${(location.pathname === '/saved-movies' || location.pathname === '/movies' || location.pathname === '/' || location.pathname === '/profile') && 'header_unhidden'}`}>
            <NavLink to="/" className="header__logo-link">
            <img className="header__logo" src={logo} alt="Логотип"/>
            </NavLink>
            {(location.pathname === '/' && !props.loggedIn) ?
            <ul className="header__buttons-list">
                <li className="header__button"><NavLink to="/signup" className="header__reg-button">Регистрация</NavLink></li>
                <li className="header__button"><NavLink to="/signin" className="header__login-button">Войти</NavLink></li>
            </ul> :
            <Navigation /> }
        </header>
    );
}

export default Header;