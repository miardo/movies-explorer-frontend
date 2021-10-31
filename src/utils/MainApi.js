const BASE_URL = 'https://api.diplom.karimov.nomoredomains.monster';

const checkResponse = (res) => {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
}

export function register(name, password, email) {
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({
            "name": name,
            "password": password,
            "email": email
        })
    })
        .then(checkResponse)
}

export function authorize(password, email) {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({
            "password": password,
            "email": email
        })
    })
        .then(checkResponse)
        .then((data) => {
            if (data.token) {
                localStorage.setItem('token', data.token);
            }
            return data;
        })
}

export function getUserData(token) {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `${token}`,
        },
        credentials: 'include'
    })
        .then(checkResponse)
        .then(data => data)
}

export function updateUserData(token, name, email) {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'PATCH',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `${token}`,
        },
        credentials: 'include',
        body: JSON.stringify({
            name: name,
            email: email
        })
    })
        .then(checkResponse)
        .then(data => data)
}

export function getSavedMovies(token) {
    return fetch(`${BASE_URL}/movies`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `${token}`,
        },
        credentials: 'include',
    })
        .then(checkResponse)
        .then(data => data)
}

export function saveMovie(token, movie) {
    return fetch(`${BASE_URL}/movies`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `${token}`,
        },
        credentials: 'include',
        body: JSON.stringify({
            country: movie.country,
            director: movie.director,
            duration: movie.duration,
            year: movie.year,
            description: movie.description,
            image: movie.image,
            trailer: movie.trailer,
            nameRU: movie.nameRU,
            nameEN: movie.nameEN,
            thumbnail: movie.thumbnail,
            movieId: movie.movieId
        })
    })
        .then(checkResponse)
        .then(data => data)
}

export function deleteMovie(token, movieId) {
    return fetch(`${BASE_URL}/movies/${movieId}`, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `${token}`,
        },
        credentials: 'include',
    })
        .then(checkResponse)
        .then(data => data)
}