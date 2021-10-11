import React from "react";
import "./Profile.css";

function Profile() {
    return (
        <section className="profile">
            <h2 className="profile__title">Привет, Марат!</h2>
            <form className="profile__edit-form">
            <article className="profile__edit-form-box">
                <div className="profile__edit-form-data">
                    <p className="profile__edit-form-name">Имя</p>
                    <input className="profile__edit-form-input" type="text" placeholder="Имя" value="Марат"/>
                </div>
                <span className="profile__input-error profile__input-error_form-style" id="name-error"></span>
            </article>
            <article className="profile__edit-form-box">
                <div className="profile__edit-form-data">
                    <p className="profile__edit-form-name">E-mail</p>
                    <input className="profile__edit-form-input" type="email" placeholder="Email" value="pochta@yandex.ru"/>
                </div>    
                <span className="profile__input-error profile__input-error_form-style" id="email-error"></span>
            </article>
            </form>
            <span className="profile__input-error" id="save-error"></span>
            <ul className="profile__buttons-list">
                <li className="profile__button "><button className="profile__button-text">Редактировать</button></li>
                <li className="profile__button "><button className="profile__button-text profile__button-text_acc-exit-style">Выйти из аккаунта</button></li>
                <li className="profile__button profile__button_hidden"><button className="profile__save-button-text">Сохранить</button></li>
            </ul>
        </section>
    );
}

export default Profile;