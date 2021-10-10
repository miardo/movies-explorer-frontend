import React from "react";
import { NavLink } from "react-router-dom";
import "./Register.css";
import logo from "../../images/header-logo.svg";

function Register() {
    return (
        <section className="register">
            <NavLink to="/" className="register__logo-link">
            <img className="register__logo" src={logo} alt="Логотип"/>
            </NavLink>
            <h2 className="register__title">Добро пожаловать!</h2>
            <form className="register__edit-form">
            <article className="register__edit-form-box">
                <p className="register__edit-form-name">Имя</p>
                <input className="register__edit-form-input" type="name" placeholder="Имя" value="Марат"/>
                <span className="register__input-error" id="email-error"></span>
            </article>
            <article className="register__edit-form-box">
                <p className="register__edit-form-name">E-mail</p>
                <input className="register__edit-form-input" type="email" placeholder="Email" value="pochta@yandex.ru"/>
                <span className="register__input-error" id="email-error"></span>
            </article>
            <article className="register__edit-form-box">
                <p className="register__edit-form-name">Пароль</p>
                <input className="register__edit-form-input register__edit-form-input_error-style" type="password" placeholder="" value="password"/>
                <span className="register__input-error" id="password-error">Что-то пошло не так...</span>
            </article>
            </form>
            <span className="register__error " id="signin-error"></span>
            <ul className="register__buttons-list">
                <li className="register__button">
                    <button className="register__save-button-text">Зарегистрироваться</button>
                </li>
                <li className="register__button">
                    <p className="register__button-text">Уже зарегистрированы?</p>
                    <NavLink to="/signin" className="register__reg-button-link">
                        <button className="register__button-link">Войти</button>
                    </NavLink>
                </li>
            </ul>
        </section>
    );
}

export default Register;