import React, { useState, useEffect } from 'react';
import './Popular.css'; 

const PopularSeries = () => {
  const [popularSeries, setPopularSeries] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=652f17b3ea20e3dc4d517ad5de2ac20d`
    )
      .then((response) => response.json())
      .then((data) => setPopularSeries(data.results))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h2 className="section-title">Séries Populares</h2>
      <div className="card-container">
        {popularSeries.map((series) => (
          <div className="card" key={series.id}>
            <h3 className="card-title">{series.name}</h3>
            <p className="card-description">{series.overview}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularSeries;

