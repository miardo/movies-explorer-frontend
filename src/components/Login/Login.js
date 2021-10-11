import React from "react";
import { NavLink } from "react-router-dom";
import "./Login.css";
import logo from "../../images/header-logo.svg";

function Login() {
    return (
        <section className="login">
            <NavLink to="/" className="login__logo-link">
            <img className="login__logo" src={logo} alt="Логотип"/>
            </NavLink>
            <h2 className="login__title">Рады видеть!</h2>
            <form className="login__edit-form">
            <article className="login__edit-form-box">
                <p className="login__edit-form-name">E-mail</p>
                <input className="login__edit-form-input" type="email" placeholder="Email" value="pochta@yandex.ru"/>
                <span className="login__input-error" id="email-error"></span>
            </article>
            <article className="login__edit-form-box">
                <p className="login__edit-form-name">Пароль</p>
                <input className="login__edit-form-input" type="password" placeholder=""/>
                <span className="login__input-error" id="password-error"></span>
            </article>
            </form>
            <span className="login__error " id="signin-error"></span>
            <ul className="login__buttons-list">
                <li className="login__button">
                    <NavLink to="/movies" className="login__save-button-link">
                        <button className="login__save-button-text">Войти</button>
                    </NavLink>
                </li>
                <li className="login__button">
                    <p className="login__button-text">Ещё не зарегистрированы?</p>
                    <NavLink to="/signup" className="login__reg-button-link">
                        <button className="login__button-link">Регистрация</button>
                    </NavLink>
                </li>
            </ul>
        </section>
    );
}

export default Login;