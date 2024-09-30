import React, { useState, useEffect } from 'react';
import { fetchMovies } from '../services/api';
import { Link } from 'react-router-dom';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('Batman'); // Termo de busca inicial

  useEffect(() => {
    const getMovies = async () => {
      const movieData = await fetchMovies(searchTerm);
      setMovies(movieData);
    };
    getMovies();
  }, [searchTerm]);

  return (
    <div>
      <h1>Catálogo de Filmes</h1>
      <input 
        type="text" 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
        placeholder="Buscar filme..." 
      />
      <div className="movie-grid">
        {movies && movies.map((movie) => (
          <Link key={movie.imdbID} to={`/detail/${movie.imdbID}`}>
            <div className="movie-card">
              <img src={movie.Poster} alt={movie.Title} />
              <h3>{movie.Title}</h3>
              <p>{movie.Year}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
