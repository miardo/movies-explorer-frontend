import React from "react";
import { NavLink } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
    return (
        <section className="not-found">
            <h2 className="not-found__title">404</h2>
            <p className="not-found__text">Страница не найдена</p>
            <NavLink to="/" className="not-found__button-link">
                <button className="not-found__button">Назад</button>
            </NavLink>
        </section>
    );
}

export default NotFound;