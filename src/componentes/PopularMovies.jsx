import React, { useState, useEffect } from 'react'; //Esta linha importa o módulo React e as funções useState e useEffect do React. Essas funções são utilizadas para gerenciar o estado e os efeitos colaterais em componentes funcionais do React.
import './Popular.css'; //Aqui, você está importando um arquivo CSS chamado "Popular.css" para aplicar estilos ao seu componente. Isso assume que você tem um arquivo CSS com estilos definidos para este componente

const PopularMovies = () => { //Isso define um componente funcional chamado "PopularMovies". Componentes funcionais são uma forma de criar componentes no React.
  const [popularMovies, setPopularMovies] = useState([]); //Esta linha declara uma variável de estado chamada "popularMovies" e uma função "setPopularMovies" para atualizar esse estado. Ela inicia o estado com um array vazio []. O estado será usado para armazenar a lista de filmes populares obtidos da API.

  useEffect(() => { //Este é um gancho de efeito do React. O código dentro deste bloco será executado após o componente ser montado.
    //No caso, ele dispara uma requisição HTTP para a API TheMovieDB para obter a lista de filmes populares. O array vazio [] no segundo argumento significa que este efeito será executado apenas uma vez, assim que o componente for montado.
    fetch( //Esta linha faz uma requisição à API TheMovieDB para obter os filmes populares. O URL da API é especificado com uma chave de API.
      //Os dados da resposta são convertidos em JSON usando .then((response) => response.json()) e, em seguida, a lista de filmes é definida como o estado de "popularMovies" usando setPopularMovies(data.results).
      `https://api.themoviedb.org/3/movie/popular?api_key=652f17b3ea20e3dc4d517ad5de2ac20d` //Api gerada pelo TheMovieDB
    )
      .then((response) => response.json())
      .then((data) => setPopularMovies(data.results))
      .catch((error) => console.error(error));
  }, []);

  return ( //O restante do código é a parte de renderização do componente. Ele retorna um JSX que descreve a estrutura do componente. O título "Filmes Populares" e a lista de filmes populares são renderizados na tela.
    //A lista de filmes é mapeada usando .map() para criar um elemento <div> para cada filme, exibindo o título e a descrição.
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

export default PopularMovies; //Finalmente, o componente "PopularMovies" é exportado como um componente padrão, o que significa que ele pode ser importado e usado em outros lugares do aplicativo.

