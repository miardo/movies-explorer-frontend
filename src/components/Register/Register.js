import React from "react";
import { NavLink } from "react-router-dom";
import "./Register.css";
import logo from "../../images/header-logo.svg";
import useValidation from "../../utils/useValidation";

function Register(props) {
    const {values, handleChange, errors, isFormValid} = useValidation();

    function handleRegister(e) {
        e.preventDefault();

        props.onRegister(values.name, values.password, values.email);

        props.onClear();
    }
    return (
        <section className="register">
            <NavLink to="/" className="register__logo-link">
            <img className="register__logo" src={logo} alt="Логотип"/>
            </NavLink>
            <h2 className="register__title">Добро пожаловать!</h2>
            <form className="register__edit-form" onSubmit={handleRegister}>
            <article className="register__edit-form-box">
                <p className="register__edit-form-name">Имя</p>
                <input className="register__edit-form-input" type="text" name="name" placeholder="Имя" value={values.name || ''} required onChange={handleChange} />
                <span className="register__input-error" id="email-error">{errors.name}</span>
            </article>
            <article className="register__edit-form-box">
                <p className="register__edit-form-name">E-mail</p>
                <input className="register__edit-form-input" type="email" name="email" pattern="^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$" placeholder="Email" value={values.email || ''} required onChange={handleChange}/>
                <span className="register__input-error" id="email-error">{errors.email}</span>
            </article>
            <article className="register__edit-form-box">
                <p className="register__edit-form-name">Пароль</p>
                <input className={`register__edit-form-input ${!errors.password ? '' : 'register__edit-form-input_error-style'}`} type="password" name="password" minLength="8" placeholder="" required value={values.password || ''} onChange={handleChange}/>
                <span className="register__input-error" id="password-error">{errors.password}</span>
            </article>
            <button className={`register__save-button-text ${(isFormValid && values.email && values.password && values.name) ? '' : 'register__save-button-text_disabled'}`} type="submit" disabled={!isFormValid}>Зарегистрироваться</button>
            </form>
            <ul className="register__buttons-list">
                <li className="register__button">
                    <p className="register__button-text">Уже зарегистрированы?</p>
                    <NavLink to="/signin" className="register__reg-button-link" onClick={props.onClear}>
                        <button className="register__button-link">Войти</button>
                    </NavLink>
                </li>
            </ul>
        </section>
    );
}

export default Register;