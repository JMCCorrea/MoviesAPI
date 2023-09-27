import React, { useState, useEffect } from 'react';
import './Popular.css'; 

const PopularMovies = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=652f17b3ea20e3dc4d517ad5de2ac20d` //Api gerada pelo TheMovieDB
    )
      .then((response) => response.json())
      .then((data) => setPopularMovies(data.results))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h2 className="section-title">Filmes Populares</h2>
      <div className="card-container">
        {popularMovies.map((movie) => (
          <div className="card" key={movie.id}>
            <h3 className="card-title">{movie.title}</h3>
            <p className="card-description">{movie.overview}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularMovies;

