import { React, useState } from "react";
import { useLocation } from "react-router-dom";
import "./MoviesCard.css";
import filmImg from "../../images/movies-card-img.png";

function MoviesCard() {
    let location = useLocation();
    const [isSaveButtonClicked, setIsSaveButtonClicked] = useState(false);

    const handleSaveButtonClicked = () => {
        if (isSaveButtonClicked === false) {
            setIsSaveButtonClicked(true)
        } else { setIsSaveButtonClicked(false) }
    }
    return (
        <article className="movies-card">
            <div className="movies-card__header">
                <div className="movies-card__header-text">
                    <h3 className="movies-card__header-text-title">33 слова о дизайне</h3>
                    <p className="movies-card__header-text-time">1ч 47м</p>
                </div>
                <button className={`movies-card__header-favorite ${location.pathname === '/saved-movies' && 'movies-card__header-favorite_delete'} ${isSaveButtonClicked && 'movies-card__header-favorite_saved'}`} onClick={handleSaveButtonClicked}></button>
            </div>
            <a className="movies-card__link" href="/"><img className="movies-card__img" src={filmImg} alt=""/></a>
        </article>
    );
}

export default MoviesCard;