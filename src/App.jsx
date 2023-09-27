import React from 'react'; //Esta linha importa o módulo React, que é necessário para criar e renderizar componentes no React. É uma dependência fundamental para qualquer aplicativo React.
import { useState, useEffect } from 'react'; //Aqui, você está importando as funções useState e useEffect do módulo React. Essas funções são usadas para gerenciar o estado e os efeitos colaterais em componentes funcionais do React.
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
//<div>...</div>:

//Esta é a div de nível superior que envolve os três componentes que você deseja renderizar. Ela serve como o contêiner para todos os componentes.
//<PopularMovies />, <PopularPeople />, <PopularSeries />:

//Estas são tags JSX que representam os componentes importados "PopularMovies", "PopularPeople" e "PopularSeries". Quando renderizadas, essas tags JSX instanciam e renderizam os componentes correspondentes.
//export default App;:

//Por fim, você exporta o componente "App" como o componente padrão deste arquivo. Isso permite que outros arquivos do seu aplicativo importem e usem este componente como ponto de entrada principal para o aplicativo React.
export default App;



