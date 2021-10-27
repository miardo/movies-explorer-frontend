import React, { useState } from "react";
import "./SearchForm.css";

function SearchForm(props) {
    const [search, setSearch] = useState('');
    const [isSearchValid, setIsSearchValid] = useState(true);

    function handleSearchChange(e) {
        setSearch(e.target.value);
        setIsSearchValid(e.target.checkValidity())
    }

    function handleSearchSavedMovies(e) {
        e.preventDefault();
        props.onSearchSavedMovies(search);
    }

    function handleSearchMovies(e) {
        e.preventDefault();
        props.onSearchMovies(search);
    }
    return (
        <section className="search">
            <form className="search__form" onSubmit={props.saved ? handleSearchSavedMovies : handleSearchMovies} noValidate>
                <input className="search__form-input" name="search" required type="text" placeholder="Фильм" value={search || ''} onChange={handleSearchChange}></input>
                <span className={`search__form-input-error ${isSearchValid ? 'search__form-input-error_hidden' : ''}`}>Нужно ввести ключевое слово</span>
                <button className={`search__form-button ${search.length === 0 ? 'search__form-button_disabled' : ''}`} disabled={search.length === 0}>Найти</button>
            </form>
            <div className="search__switcher">
                <input type="checkbox" id='checkbox' className="search__switcher-button" onChange={props.onShortMoviesCheck} checked={props.isChecked}></input>
                <label className="search__switcher-text" htmlFor="checkbox">Короткометражки</label>
            </div>
        </section>
    );
}

export default SearchForm;