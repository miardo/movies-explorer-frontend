import React from "react";
import { NavLink } from "react-router-dom";
import "./Login.css";
import logo from "../../images/header-logo.svg";
import useValidation from "../../utils/useValidation";

function Login(props) {
    const {values, handleChange, errors, isFormValid} = useValidation();

    function handleLogin(e) {
        e.preventDefault();
        props.onLogin(values.password, values.email);
        props.onClear();
    }
    return (
        <section className="login">
            <NavLink to="/" className="login__logo-link">
            <img className="login__logo" src={logo} alt="Логотип"/>
            </NavLink>
            <h2 className="login__title">Рады видеть!</h2>
            <form className="login__edit-form" onSubmit={handleLogin}>
            <article className="login__edit-form-box">
                <p className="login__edit-form-name">E-mail</p>
                <input className="login__edit-form-input" type="email" name="email" pattern="^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$" placeholder="Email" autoComplete="off" value={values.email || ''} onChange={handleChange}/>
                <span className="login__input-error" id="email-error">{errors.email}</span>
            </article>
            <article className="login__edit-form-box">
                <p className="login__edit-form-name">Пароль</p>
                <input className="login__edit-form-input" minLength="8" type="password" name="password" placeholder="" value={values.password || ''} onChange={handleChange}/>
                <span className="login__input-error" id="password-error">{errors.password}</span>
            </article>
            <button className={`login__save-button-text ${(isFormValid && values.email) ? '' : 'login__save-button-text_disabled'}`} type="submit" disabled={!isFormValid}>Войти</button>
            </form>
            <ul className="login__buttons-list">
                <li className="login__button">
                    <p className="login__button-text">Ещё не зарегистрированы?</p>
                    <NavLink to="/signup" className="login__reg-button-link" onClick={props.onClear}>
                        <button className="login__button-link">Регистрация</button>
                    </NavLink>
                </li>
            </ul>
        </section>
    );
}

export default Login;