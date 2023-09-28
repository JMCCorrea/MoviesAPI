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
    //`<h2 className="section-title">Pessoas Populares</h2>`: Aqui, criando um cabeçalho `<h2>` com o texto "Pessoas Populares".
    //indica que uma seção está sendo exibida. 3. `<div className="card-container">`: Este é outro `<div>` que funciona como um contêiner para os cartões das pessoas populares. 
    //`{popularPeople.map((person) => (`: Aqui, estamos usando a função `map()` para percorrer o array `popularPeople`. 
    //O `map()` é uma função JavaScript que permite iterar sobre todos os elementos de um array e executar uma operação para cada elemento. Neste caso, vamos percorrer uma lista de pessoas populares
  );
};

export default PopularPeople;

