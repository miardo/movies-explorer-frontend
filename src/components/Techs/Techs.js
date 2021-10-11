import React from "react";
import "./Techs.css";

function Techs() {
    return (
        <section className="techs">
            <h2 className="techs__title" id="techs">Технологии</h2>
            <div className="techs__description">
                <h3 className="techs__description-title">7 технологий</h3>
                <p className="techs__description-text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
                <ul className="techs__description-stack-list">
                    <li className="techs__description-stack">HTML</li>
                    <li className="techs__description-stack">CSS</li>
                    <li className="techs__description-stack">JS</li>
                    <li className="techs__description-stack">React</li>
                    <li className="techs__description-stack">Git</li>
                    <li className="techs__description-stack">Express.js</li>
                    <li className="techs__description-stack">mongoDB</li>
                </ul>
            </div>
        </section>
    );
}

export default Techs;