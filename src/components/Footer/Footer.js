import React from "react";
import { useLocation } from "react-router-dom";
import "./Footer.css";

function Footer() {
    let location = useLocation();
    
    return (
        <footer className={`footer ${(location.pathname === '/saved-movies' || location.pathname === '/movies' || location.pathname === '/') && 'footer_unhidden'}`}>
            <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className="footer__block">
                <p className="footer__block-date">&#169; 2021</p>
                <ul className="footer__block-links-list">
                    <li className="footer__block-text"><a className="footer__block-link" href="https://practicum.yandex.ru/">Яндекс.Практикум</a></li>
                    <li className="footer__block-text"><a className="footer__block-link" href="https://github.com/miardo">Github</a></li>
                    <li className="footer__block-text"><a className="footer__block-link" href="https://www.facebook.com/profile.php?id=100011336865067">Facebook</a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;