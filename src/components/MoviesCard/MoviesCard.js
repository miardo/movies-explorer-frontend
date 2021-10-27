import { React, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./MoviesCard.css";
import filmImg from "../../images/movies-card-img.png";

function MoviesCard(props) {
    let location = useLocation();

    const [isDeleteButtonVisible, setIsDeleteButtonVisible] = useState(false);
    const [isSaved, setIsSaved] = useState(false);

    const movie = {
        country: props.movie.country || 'Нет данных',
        director: props.movie.director || 'Нет данных',
        duration: props.movie.duration || 0,
        year: props.movie.year || 'Нет данных',
        description: props.movie.description || 'Нет данных',
        image: `${props.movie.image === null ? `${filmImg}` : `https://api.nomoreparties.co${props.movie.image?.url}`}`,
        trailer: props.movie?.trailerLink,
        nameRU: props.movie.nameRU || 'Нет данных',
        nameEN: props.movie.nameEN || 'Нет данных',
        thumbnail: `${props.movie.image === null ? `${filmImg}` : `https://api.nomoreparties.co${props.movie.image?.formats?.thumbnail?.url}`}`,
        movieId: props.movie.id,
    }

    const editedDuration = `${Math.trunc(movie.duration / 60)}ч ${movie.duration % 60}м`;
    const image = `${props.movie.image === null ? `${filmImg}` : `https://api.nomoreparties.co${props.movie.image?.url}`}`;
    const savedMovies = JSON.parse(localStorage.getItem('savedMovies'));
    const currentMovie = savedMovies.find((movie) => movie.nameRU === props.movie.nameRU);


    function handleLikeButtonCLick() {
        props.onMovieSave(movie);
        setIsSaved(true);
    }

    function handleDisLike() {
        setIsSaved(false);
        props.onDeleteMovie(currentMovie._id);
    }

    function handleDeleteMovie() {
        props.onDeleteMovie(props.movie._id);
        setIsSaved(false);
    }

    useEffect(() => {
        if (currentMovie) {
            setIsSaved(true)
        }
    }, [currentMovie, location])

    return (
        <article className="movies-card">
            <div className="movies-card__header">
                <div className="movies-card__header-text">
                    <h3 className="movies-card__header-text-title">{props.movie.nameRU}</h3>
                    <p className="movies-card__header-text-time">{editedDuration}</p>
                </div>
                {props.saved ?
                    <button className={`movies-card__header-favorite ${!isDeleteButtonVisible ? 'movies-card__header-favorite_delete' : ''}`} onClick={handleDeleteMovie}></button> :
                    <button className={`movies-card__header-favorite ${isSaved ? 'movies-card__header-favorite_saved' : ''}`} onClick={isSaved ? handleDisLike : handleLikeButtonCLick}></button>}
            </div>
            <a className="movies-card__link" href={props.saved ? props.movie.trailer : props.movie.trailerLink}><img className="movies-card__img" src={props.saved ? props.movie.image : image} alt="{props.movie.nameRU}" /></a>
        </article>
    );
}

export default MoviesCard;