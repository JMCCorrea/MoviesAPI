import React, { useState, useEffect } from 'react';
import './Popular.css'; 

const PopularPeople = () => {
  const [popularPeople, setPopularPeople] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/person/popular?api_key=652f17b3ea20e3dc4d517ad5de2ac20d`
    )
      .then((response) => response.json())
      .then((data) => setPopularPeople(data.results))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h2 className="section-title">Pessoas Populares</h2>
      <div className="card-container">
        {popularPeople.map((person) => (
          <div className="card" key={person.id}>
            <h3 className="card-title">{person.name}</h3>
            <p className="card-description">{person.known_for_department}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularPeople;

