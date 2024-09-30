import axios from 'axios';

// Sua chave da API OMDb
const API_KEY = '876e490f';

export const fetchMovies = async (query) => {
  const response = await axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`);
  return response.data.Search; // Array de filmes retornados pela API
};

export const fetchMovieDetails = async (id) => {
  const response = await axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`);
  return response.data; // Detalhes de um único filme
};
