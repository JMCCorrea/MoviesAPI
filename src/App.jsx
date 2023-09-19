import React from 'react';
import { useState, useEffect } from 'react';
import PopularMovies from './componentes/PopularMovies';
import PopularPeople from './componentes/PopularPeople';
import PopularSeries from './componentes/PopularSeries';

function App() {
  return (
    <div>
      
      <PopularMovies />
      <PopularPeople />
      <PopularSeries />
    </div>
  );
}

export default App;



