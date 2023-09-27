import React from 'react'; //Esta linha importa o módulo React, que é necessário para criar e renderizar componentes no React. É uma dependência fundamental para qualquer aplicativo React.
import { useState, useEffect } from 'react'; //Aqui, você está importando as funções useState e useEffect do módulo React. Essas funções são usadas para gerenciar o estado e os efeitos colaterais em componentes funcionais do React.
import PopularMovies from './componentes/PopularMovies'; //Este trecho importa um componente chamado "PopularMovies" de um arquivo chamado "PopularMovies.js" (ou "PopularMovies.jsx") localizado na pasta "componentes". 
//Você está fazendo o mesmo para os componentes "PopularPeople" e "PopularSeries" nas linhas seguintes.
import PopularPeople from './componentes/PopularPeople';
import PopularSeries from './componentes/PopularSeries';

function App() { //Aqui, está definindo uma função chamada "App". Esta função representa o componente principal do aplicativo React. 
  //Os componentes do React podem ser definidos como funções (componentes funcionais) ou classes (componentes de classe). Neste caso, você está usando uma função.
  return ( //Dentro da função "App",está retornando um JSX que descreve a estrutura do aplicativo.
    //Este JSX renderiza os componentes "PopularMovies", "PopularPeople" e "PopularSeries" dentro de uma div.
    <div>
    
      <PopularMovies />
      <PopularPeople /> //Estas são tags JSX que representam os componentes importados "PopularMovies", "PopularPeople" e "PopularSeries". Quando renderizadas, essas tags JSX instanciam e renderizam os componentes correspondentes.
      <PopularSeries />
    </div> //Esta é uma div de nível superior que envolve os três componentes que quero  renderizar. Ela serve como o contêiner para todos os componentes.

//Por fim, você exporta o componente "App" como o componente padrão deste arquivo. Isso permite que outros arquivos do seu aplicativo importem e usem este componente como ponto de entrada principal para o aplicativo React.
export default App;



