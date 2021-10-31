import './App.css';
import React, { useEffect, useState } from 'react';
import { Route, Switch, useHistory, useLocation } from 'react-router';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Footer from '../Footer/Footer';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';
import InfoPopup from '../InfoPopup/InfoPopup';
import * as moviesApi from '../../utils/MoviesApi';
import * as mainApi from '../../utils/MainApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

function App() {
    const history = useHistory();
    const location = useLocation();

    const isLoggedIn = localStorage.getItem('loggedIn');

    const [isUpdate, setIsUpdate] = useState(true);
    const [token, setToken] = useState('');
    const [currentUser, setCurrentUser] = useState('');

    const [movies, setMovies] = useState([]);
    const [allMovies, setAllMovies] = useState([]);
    const [savedMovies, setSavedMovies] = useState([]);

    const [isSearching, setIsSearching] = useState(false);
    const [isShortMoviesChecked, setIsShortMoviesChecked] = useState(false);
    const [isSaving, setIsSaving] = useState(false);
    const [notFound, setNotFound] = useState(false);

    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    function handleShortMoviesCheck(e) {
        setIsShortMoviesChecked(e.target.checked);
    }

    function handleLogin(password, email) {
        setIsSaving(true);
        mainApi.authorize(password, email)
            .then((data) => {
                if (data.token) {
                    localStorage.setItem('loggedIn', 'true');
                    history.push('/movies');
                } else if (data.error === 'Bad Request') {
                    setErrorMessage('Введены невалидные данные');
                    setIsPopupOpen(true);
                } else if (data.message) {
                    setErrorMessage(data.message);
                    setIsPopupOpen(true);
                }
            })
            .catch(() => {
                setErrorMessage('Что-то пошло не так...');
                setIsPopupOpen(true);
            })
            .finally(() => {
                setIsSaving(false);
            })
    }

    function handleRegister(name, password, email) {
        setIsSaving(true);
        mainApi.register(name, password, email)
            .then((res) => {
                if (res._id) {
                    handleLogin(password, email);
                } else if (res.error === 'Bad Request') {
                    setErrorMessage('Введены невалидные данные');
                    setIsPopupOpen(true);
                } else if (res.message) {
                    setErrorMessage(res.message);
                    setIsPopupOpen(true);
                }
            })
            .catch(() => {
                setErrorMessage('Что-то пошло не так...');
                setIsPopupOpen(true);
            })
            .finally(() => {
                setIsSaving(false);
            })
    }

    function handleUpdateUserInfo(name, email) {
        mainApi.updateUserData(token, name, email)
            .then((res) => {
                setCurrentUser(res);
                setIsUpdate(true);
                setErrorMessage('Профиль обновлен');
                setIsPopupOpen(true);
            })
            .catch(() => {
                setErrorMessage('При обновлении профиля произошла ошибка');
                setIsPopupOpen(true);
                setIsUpdate(false);
            })
    }

    function handleSignOut() {
        localStorage.removeItem('loggedIn');
        localStorage.removeItem('token');
        localStorage.removeItem('movies');
        setSavedMovies([]);
        setMovies([]);
        setAllMovies([]);
        history.push('/');
    }

    function clearErrorMessages() {
        setErrorMessage('');
        setIsPopupOpen(false);
    }

    function handleSearchMovies(movies, keyword) {
        let filteredMovies = [];
        movies.forEach((movie) => {
            if (
                movie.nameRU.toLowerCase().indexOf(keyword.toLowerCase()) > -1
                ) {
                if (isShortMoviesChecked) {
                    if (movie.duration <= 40) {
                        return filteredMovies.push(movie);
                    }
                    return
                }
                return filteredMovies.push(movie);
            }
        })
        return filteredMovies;
    }

    function searchSavedMovies(keyword) {
        let allSavedMovies = "";
        if (Array.isArray(JSON.parse(localStorage.getItem('savedMovies'))[0])) {
            allSavedMovies = JSON.parse(localStorage.getItem('savedMovies'))[0];
        } else {
            allSavedMovies = JSON.parse(localStorage.getItem('savedMovies'));
        }
        const searchSavedResult = handleSearchMovies(allSavedMovies, keyword);
        setSavedMovies(searchSavedResult);
    }

    function searchMovies(keyword) {
        setIsSearching(true);
        setMovies([]);
        setNotFound(false);
        if (allMovies.length === 0) {
            moviesApi.getMovies()
                .then((movies) => {
                    setAllMovies(movies)
                    const searchResult = handleSearchMovies(movies, keyword);
                    if (searchResult.length === 0) {
                        setNotFound(true);
                        setMovies([]);
                    } else {
                        localStorage.setItem('movies', JSON.stringify(searchResult))
                        setMovies(JSON.parse(localStorage.getItem('movies')));
                    }
                })
                .catch(() => {
                    setMovies([]);
                })
                .finally(() => {
                    setIsSearching(false);
                    setIsShortMoviesChecked(false);
                })
        } else {
            const searchResult = handleSearchMovies(allMovies, keyword);
            if (searchResult.length === 0) {
                setNotFound(true);
                setMovies([]);
                setIsSearching(false);
                setIsShortMoviesChecked(false);
            } else if (searchResult.length !== 0) {
                localStorage.setItem('movies', JSON.stringify(searchResult));
                setMovies(JSON.parse(localStorage.getItem('movies')));
                setIsSearching(false);
                setIsShortMoviesChecked(false);
            } else {
                setMovies([]);
                setIsShortMoviesChecked(false);
            }
        }
    }

    function handleSaveMovie(movie) {
        mainApi.saveMovie(token, movie)
            .then((savedMovie) => {
                const films = [...savedMovies, savedMovie];
                localStorage.setItem('savedMovies', JSON.stringify(films));
                setSavedMovies(prevState => ([...prevState, savedMovie]));
            })
            .catch((err) => {
                console.log(err);
            })
    }

    function handleDeleteMovie(movieId) {
        mainApi.deleteMovie(token, movieId)
            .then(() => {
                const newSavedMovies = savedMovies.filter((deletedMovie) => { return deletedMovie._id !== movieId })
                setSavedMovies(newSavedMovies);
                localStorage.setItem('savedMovies', JSON.stringify(newSavedMovies));
            })
            .catch((err) => {
                console.log(err);
            })
    }

    function closePopup() {
        setIsPopupOpen(false);
    }

    useEffect(() => {
        function checkToken() {
            if (localStorage.getItem('token')) {
                const token = localStorage.getItem('token');
                const searchedMovies = JSON.parse(localStorage.getItem('movies'));
                if (token) {
                    Promise.all([mainApi.getUserData(token), mainApi.getSavedMovies(token)])
                        .then(([userData, movies]) => {
                            setCurrentUser(userData);
                            setToken(localStorage.getItem('token'));
                            const films = [...savedMovies, movies];
                            localStorage.setItem('savedMovies', JSON.stringify(films));
                            setSavedMovies(prevState => ([...prevState, movies]));
                            setMovies(searchedMovies);
                            localStorage.setItem('loggedIn', 'true');
                        })
                        .catch((err) => {
                            console.log(err);
                        }
                        )
                }
            }
        }
        checkToken();
    }, [history, isLoggedIn])

    useEffect(() => {
        const token = localStorage.getItem('token');
        mainApi.getSavedMovies(token)
            .then((res) => {
                setSavedMovies(res);
            })
    }, [location]);

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <Header loggedIn={isLoggedIn} />
            <Switch>
                <ProtectedRoute
                    exact path="/movies"
                    loggedIn={isLoggedIn}
                    component={Movies}
                    movies={movies}
                    onSearchMovies={searchMovies}
                    isSearching={isSearching}
                    notFound={notFound}
                    onMovieSave={handleSaveMovie}
                    onDeleteMovie={handleDeleteMovie}
                    savedMovies={savedMovies}
                    onShortMoviesCheck={handleShortMoviesCheck}
                    isShortMoviesChecked={isShortMoviesChecked} />
                <ProtectedRoute
                    exact path="/saved-movies"
                    loggedIn={isLoggedIn}
                    component={SavedMovies}
                    movies={savedMovies}
                    onDeleteMovie={handleDeleteMovie}
                    onSearchSavedMovies={searchSavedMovies}
                    onShortMoviesCheck={handleShortMoviesCheck}
                    isShortMoviesChecked={isShortMoviesChecked} />
                <ProtectedRoute
                    exact path="/profile"
                    loggedIn={isLoggedIn}
                    component={Profile}
                    onSignOut={handleSignOut}
                    onChangeUser={handleUpdateUserInfo}
                    isUpdate={isUpdate}
                    isSaving={isSaving} />
                <Route exact path="/">
                    <Main />
                </Route>
                <Route path="/signin">
                    <Login
                        onLogin={handleLogin}
                        onClear={clearErrorMessages}
                        isSaving={isSaving} />
                </Route>
                <Route path="/signup">
                    <Register
                        onRegister={handleRegister}
                        onClear={clearErrorMessages}
                        isSaving={isSaving} />
                </Route>
                <Route path="*">
                    <NotFound />
                </Route>
            </Switch>
            <Footer />
            <InfoPopup
                errorMessage={errorMessage}
                popupOpen={isPopupOpen}
                closePopup={closePopup}
            />
        </CurrentUserContext.Provider>
    );
}

export default App;
