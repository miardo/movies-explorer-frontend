import React from "react";
import "./AboutMe.css";
import photo from "../../images/about-me-photo.jpg";

function AboutMe() {
    return (
        <section className="about-me">
            <h2 className="about-me__title" id="about-me">Студент</h2>
            <div className="about-me__student">
                <div className="about-me__student-description">
                    <h3 className="about-me__student-description-name">Марат Каримов</h3>
                    <h4 className="about-me__student-description-title">Фронтенд-разработчик</h4>
                    <p className="about-me__student-description-text">Я начинающий фронтенд-разработчик. С удовольствием осваиваю новое для себя направление Web-разработки. Нацелен на большие результаты и продуктивную работу.</p>
                    <ul className="about-me__student-description-links-list">
                        <li className="about-me__student-description-link"><a className="about-me__student-description-link-social" href="https://www.facebook.com/profile.php?id=100011336865067">Facebook</a></li>
                        <li className="about-me__student-description-link"><a className="about-me__student-description-link-social" href="https://github.com/miardo">Github</a></li>
                    </ul>
                </div>
                <img className="about-me__student-photo" src={photo} alt="Марат Каримов"/>
            </div>
        </section>
    );
}

export default AboutMe;