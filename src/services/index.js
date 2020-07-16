require('dotenv').config()
const url = 'https://api.themoviedb.org/';
const MOVIEDB_API_KEY = '42f466ffb2d5fe7abb3db69879499883';
const config = `api_key=${MOVIEDB_API_KEY}&language=es-ES`;

async function getIncine (page) {
    const data  = await fetch(url+'3/movie/now_playing?'+config+'&page='+page);
    const response = await data.json();
    return response.results;
}

async function getPopulars (page = 1) {
    const data = await fetch(url+'3/movie/popular?'+config+'&page='+page);
    const response = await data.json();
    return response.results;
}

async function search (q) {
    const data = await fetch(`${url}3/search/movie?${config}&query=${q}`)
    const response = await data.json();
    return response.results;
}

async function details (id) {
    const data = await fetch(`${url}3/movie/${id}?${config}`)
    const response = await data.json()
    return response;
}

async function getActors (movieId) {
    const data = await fetch(`${url}3/movie/${movieId}/credits?${config}`)
    const response = await data.json()
    return response.cast;
}

module.exports = {
    getIncine,
    getPopulars,
    search,
    details,
    getActors
}