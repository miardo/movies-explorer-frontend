import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies(props) {
    return (
        <>
            <main>
                <SearchForm
                    onSearchMovies={props.onSearchMovies}
                    onShortMoviesCheck={props.onShortMoviesCheck}
                    saved={false}
                    isChecked={props.isShortMoviesChecked} />
                <MoviesCardList
                    movies={props.movies}
                    isSearching={props.isSearching}
                    notFound={props.notFound}
                    onMovieSave={props.onMovieSave}
                    onDeleteMovie={props.onDeleteMovie}
                    saved={false}
                    savedMovies={props.savedMovies}
                />
            </main>
        </>
    );
}

export default Movies;