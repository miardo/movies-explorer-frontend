import React from "react";
import "./AboutProject.css";

function AboutProject() {
    return (
        <section className="about-project">
            <h2 className="about-project__title" id="about-project">О проекте</h2>
            <div className="about-project__description">
                <article className="about-project__description-block">
                    <h3 className="about-project__description-block-title">Дипломный проект включал 5 этапов</h3>
                    <p className="about-project__description-block-text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </article>
                <article className="about-project__description-block">
                    <h3 className="about-project__description-block-title">На выполнение диплома ушло 5 недель</h3>
                    <p className="about-project__description-block-text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </article>
            </div>
            <div className="about-project__timeline">
                <article className="about-project__timeline-block">
                    <p className="about-project__timeline-block-header">1 неделя</p>
                    <p className="about-project__timeline-block-footer">Back-end</p>
                </article>
                <article className="about-project__timeline-block">
                    <p className="about-project__timeline-block-header about-project__timeline-block-header_style">4 недели</p>
                    <p className="about-project__timeline-block-footer">Front-end</p>
                </article>
            </div>
        </section>
    );
}

export default AboutProject;