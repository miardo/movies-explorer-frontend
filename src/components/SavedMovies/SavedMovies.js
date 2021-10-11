import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import More from '../More/More';

function SavedMovies() {
    return (
        <>
            <main>
                <SearchForm />
                <MoviesCardList />
                <More />
            </main>
        </>
    );
}

export default SavedMovies;