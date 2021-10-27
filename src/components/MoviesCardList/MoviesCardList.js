import React, { useState } from 'react';
import "./MoviesCardList.css";
import Preloader from '../Preloader/Preloader';
import MoviesCard from '../MoviesCard/MoviesCard';
import More from '../More/More';

function MoviesCardList(props) {

    const [initialCardsNumber, setInitialCardsNumber] = useState(() => {
        const windowSize = window.innerWidth;
        if (windowSize < 768) {
            return 5
        } else if (windowSize < 1024) {
            return 8
        } else if (windowSize > 1024) {
            return 12
        }
    });
    const [moreCardsNumber, setMoreCardsNumber] = useState(() => {
        const windowSize = window.innerWidth;
        if (windowSize < 768) {
            return 2
        } else if (windowSize < 1024) {
            return 2
        } else if (windowSize > 1024) {
            return 3
        }
    });

    const displayedMovies = props.movies?.slice(0, initialCardsNumber);


    function handleMoviesIncrease() {
        setInitialCardsNumber(prevState => { return prevState + moreCardsNumber });
    }
    
    return (
        <section className="movies-card-list-box">
            <div className="movies-card-list">
                <Preloader isSearching={props.isSearching} />
                <p className={`movies-card-list__text ${props.notFound ? '' : 'movies-card-list__text_hidden'}`}>Фильмы не найдены</p>
                {displayedMovies?.map((movie) => {
                    if (movie.movieId !== undefined || movie.id !== undefined) {
                    return (
                        <MoviesCard
                            movie={movie}
                            key={props.saved ? movie.movieId : movie.id}
                            saved={props.saved}
                            onMovieSave={props.onMovieSave}
                            onDeleteMovie={props.onDeleteMovie}
                            savedMovies={props.savedMovies}
                        />
                    )
                }
                })
                }
            </div>
            {(props.movies?.length !== displayedMovies?.length && !props.saved) && (
                <More saved={false} displayedMovies={displayedMovies} handleMoviesIncrease={handleMoviesIncrease} />
            )}
        </section>
    );
}

export default MoviesCardList;