import { React, useState } from "react";
import "./SearchForm.css";

function SearchForm() {
    const [isSwitcherClicked, setIsSwitcherClicked] = useState(false);

    const handleSwitcherClicked = () => {
        if (isSwitcherClicked === false) {
            setIsSwitcherClicked(true)
        } else { setIsSwitcherClicked(false) }
    }
    return (
        <section className="search">
            <form className="search__form">
                <input className="search__form-input" type="text" placeholder="Фильм"></input>
                <button className="search__form-button">Найти</button>
            </form>
            <div className="search__switcher">
                <button className={`search__switcher-button ${isSwitcherClicked && 'search__switcher-button_off'}`} onClick={handleSwitcherClicked}></button>
                <p className="search__switcher-text">Короткометражки</p>
            </div>
        </section>
    );
}

export default SearchForm;