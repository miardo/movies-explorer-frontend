import { React, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
    let location = useLocation();

    const [isBurgerClicked, setIsBurgerClicked] = useState(false);

    const handleBurgerClicked = () => {
        if (isBurgerClicked === false) {
            setIsBurgerClicked(true)
        } else { setIsBurgerClicked(false) }
    }

    return (
        <nav className={`navigation ${isBurgerClicked && 'navigation_opened-burger-menu'}`}>
            <div className={`navigation__menu ${isBurgerClicked && 'navigation__menu_opened-burger-menu'}`}>
                <button className={`navigation__burger-btn ${isBurgerClicked && 'navigation__burger-btn_close'}`} onClick={handleBurgerClicked}></button>
                <ul className={`navigation__buttons-list ${isBurgerClicked && 'navigation__buttons-list_opened-burger-menu'}`}>
                    <li className="navigation__button"><NavLink to="/" className={`navigation__main-button ${location.pathname === '/' && 'navigation__link_active'} ${isBurgerClicked && 'navigation__main-button_opened-burger-menu'}`}>Главная</NavLink></li>
                    <li className="navigation__button"><NavLink to="/movies" activeClassName="navigation__link_active" className={`navigation__all-films-button ${isBurgerClicked && 'navigation__all-films-button_opened-burger-menu'}`}>Фильмы</NavLink></li>
                    <li className="navigation__button"><NavLink to="/saved-movies" activeClassName="navigation__link_active" className={`navigation__saved-films-button ${isBurgerClicked && 'navigation__saved-films-button_opened-burger-menu'}`}>Сохранённые фильмы</NavLink></li>
                </ul>
                <NavLink to="/profile" className={`navigation__acc ${isBurgerClicked && 'navigation__acc_opened-burger-menu'}`}>Аккаунт</NavLink>
            </div>
        </nav>
    );
}

export default Navigation;