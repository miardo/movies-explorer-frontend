import React from "react";
import "./Portfolio.css";
import arrow from "../../images/about-me-link.svg";

function Portfolio() {
    return (
        <section className="portfolio">    
                <h3 className="portfolio__title">Портфолио</h3>
                <nav className="portfolio__links">
                    <article className="portfolio__link">
                        <a className="portfolio__link-text" href="https://github.com/miardo/how-to-learn">Статичный сайт</a>
                        <img className="portfolio__link-img" src={arrow} alt="Стрелочка"/>
                    </article>
                    <article className="portfolio__link">
                        <a className="portfolio__link-text" href="https://github.com/miardo/russian-travel">Адаптивный сайт</a>
                        <img className="portfolio__link-img" src={arrow} alt="Стрелочка"/>
                    </article>
                    <article className="portfolio__link">
                        <a className="portfolio__link-text" href="https://github.com/miardo/react-mesto-auth">Одностраничное приложение</a>
                        <img className="portfolio__link-img" src={arrow} alt="Стрелочка"/>
                    </article>
                </nav>
        </section>
    );
}

export default Portfolio;