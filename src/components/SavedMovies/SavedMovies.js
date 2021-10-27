import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies(props) {
    return (
        <>
            <main>
                <SearchForm
                    onSearchSavedMovies={props.onSearchSavedMovies}
                    saved={true}
                    onShortMoviesCheck={props.onShortMoviesCheck}
                    isChecked={props.isShortMoviesChecked}
                />
                <MoviesCardList
                    saved={true}
                    movies={props.movies}
                    onDeleteMovie={props.onDeleteMovie}
                />
            </main>
        </>
    );
}

export default SavedMovies;