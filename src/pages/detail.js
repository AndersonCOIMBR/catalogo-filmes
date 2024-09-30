import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../services/api';

const Detail = () => {
  const { id } = useParams(); // Obtém o ID do filme a partir da URL
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getMovieDetails = async () => {
      const movieData = await fetchMovieDetails(id);
      setMovie(movieData);
    };
    getMovieDetails();
  }, [id]);

  return (
    <div>
      {movie ? (
        <div>
          <h1>{movie.Title}</h1>
          <img src={movie.Poster} alt={movie.Title} />
          <p>{movie.Plot}</p>
          <p><strong>Diretor:</strong> {movie.Director}</p>
          <p><strong>Elenco:</strong> {movie.Actors}</p>
          <p><strong>Gênero:</strong> {movie.Genre}</p>
          <p><strong>Ano:</strong> {movie.Year}</p>
        </div>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
};

export default Detail;
