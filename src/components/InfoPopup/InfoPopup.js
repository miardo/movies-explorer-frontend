import React from "react";
import "./InfoPopup.css";

function InfoPopup(props) {
    return (
        <div className={`info-popup ${!props.popupOpen && 'info-popup_hidden'}`}>
            <div className="info-popup__box">
                <p className={`info-popup__title ${(props.errorMessage === 'Профиль обновлен') && 'info-popup__title_hidden'}`}  >Ошибка</p>
                <button className="info-popup__button" type="button" onClick={props.closePopup}></button>
            </div>
            <p className={`info-popup__text ${(props.errorMessage === 'Профиль обновлен') && 'info-popup__text_success'}`}>{props.errorMessage}</p>
        </div>
    );
}

export default InfoPopup;