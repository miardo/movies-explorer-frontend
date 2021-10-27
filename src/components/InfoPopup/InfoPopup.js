import React from "react";
import "./InfoPopup.css";

function InfoPopup(props) {
    return (
        <div className={`info-popup ${!props.popupOpen && 'info-popup_hidden'}`}>
            <div className="info-popup__box">
                <p className="info-popup__title">Ошибка</p>
                <button className="info-popup__button" type="button" onClick={props.closePopup}></button>
            </div>
            <p className="info-popup__text">{props.loginErrorMessage}</p>
        </div>
    );
}

export default InfoPopup;