import axios from 'axios';

// BASE DA URL https://api.themoviedb.org/3/
// URL DA API https://api.themoviedb.org/3/movie/now_playing?api_key=2cf05e73f1b46d4f3b0d36cb3b645e7c&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;