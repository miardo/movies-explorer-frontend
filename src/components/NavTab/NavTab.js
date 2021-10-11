import React from "react";
import "./NavTab.css";

function NavTab() {
    return (
        <section className="nav-tab">
            <nav className="nav-tab__menu">
                <ul className="nav-tab__menu-list">
                    <li className="nav-tab__menu-text"><a href="#about-project" className="nav-tab__menu-link">О проекте</a></li>
                    <li className="nav-tab__menu-text"><a href="#techs" className="nav-tab__menu-link">Технологии</a></li>
                    <li className="nav-tab__menu-text"><a href="#about-me" className="nav-tab__menu-link">Студент</a></li>
                </ul>
            </nav>
        </section>
    );
}

export default NavTab;