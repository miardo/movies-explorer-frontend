import React from "react";
import "./MoviesCardList.css";
// import Preloader from '../Preloader/Preloader';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList() {
    return (
        <section className="movies-card-list">
            {/* <Preloader /> */}
            {/* <p className="movies-card-list__text">Фильмы не найдены</p> */}
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
        </section>
    );
}

export default MoviesCardList;