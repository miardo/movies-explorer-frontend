import React from "react";
import "./More.css";

function More(props) {
    return (
        <section className={props.saved ? 'more more_hidden' : `more ${props.movies?.length === props.displayedMovies?.length ? 'more_hidden' : ''}`}>
            <button className="more__button" onClick={props.handleMoviesIncrease}>Ещё</button>
        </section>
    );
}

export default More;