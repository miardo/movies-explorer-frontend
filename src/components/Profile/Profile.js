import React, { useEffect, useState, useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "./Profile.css";
import useValidation from "../../utils/useValidation";

function Profile(props) {
    const { values, setValues, handleChange, errors, isFormValid } = useValidation();
    const [isFormDisabled, setIsFormDisabled] = useState(true);

    const currentUser = useContext(CurrentUserContext);

    useEffect(() => {
        setValues(currentUser);
    }, [currentUser, setValues]);

    function handleEditProfileClick(e) {
        e.preventDefault();
        setIsFormDisabled(false);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.onChangeUser(values.name, values.email);
    }

    useEffect(() => {
        setIsFormDisabled(props.isUpdate);
    }, [props.isUpdate, props.onChangeUser])

    useEffect(() => {
        if (props.isSaving) {
            setIsFormDisabled(true);
        }
    }, [props.isSaving])

    return (
        <section className="profile">
            <h2 className="profile__title">Привет, {currentUser.name}!</h2>
            <form className="profile__edit-form" onSubmit={handleSubmit} noValidate>
                <article className="profile__edit-form-box">
                    <div className="profile__edit-form-data">
                        <p className="profile__edit-form-name">Имя</p>
                        <input className="profile__edit-form-input" type="text" name="name" required value={values.name || ''} disabled={isFormDisabled} onChange={handleChange} />
                    </div>
                    <span className="profile__input-error profile__input-error_form-style" id="name-error">{errors.name}</span>
                </article>
                <article className="profile__edit-form-box">
                    <div className="profile__edit-form-data">
                        <p className="profile__edit-form-name">E-mail</p>
                        <input className="profile__edit-form-input" type="email" name="email" required value={values.email || ''} disabled={isFormDisabled} onChange={handleChange} />
                    </div>
                    <span className="profile__input-error profile__input-error_form-style" id="email-error">{errors.email}</span>
                </article>
                <button type="submit" className={`${isFormDisabled && 'profile__button_hidden'} profile__save-button-text ${isFormValid ? '' : 'profile__save-button-text_disabled'}`}>Сохранить</button>
            </form>
            <ul className="profile__buttons-list">
                <li className={isFormDisabled ? 'profile__button' : 'profile__button_hidden'}><button className="profile__button-text" onClick={handleEditProfileClick}>Редактировать</button></li>
                <li className={isFormDisabled ? 'profile__button' : 'profile__button_hidden'}><button className="profile__button-text profile__button-text_acc-exit-style" onClick={props.onSignOut}>Выйти из аккаунта</button></li>
            </ul>
        </section>
    );
}

export default Profile;