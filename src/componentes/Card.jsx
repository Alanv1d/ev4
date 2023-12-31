import { useState, useEffect } from 'react';
import '../css/estilos.css';

function Card(props) {
  const [pokemon, setPokemon] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon');
    const data = await response.json();
    const randomPokemonIndex = Math.floor(Math.random() * data.count) + 1;
    const pokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemonIndex}`);
    const pokemonData = await pokemonResponse.json();
    setPokemon(pokemonData);
  };

  useEffect(() => {
    (async () => {
      await fetchData();
      setIsLoading(false);
    })();
  }, []);

  if (isLoading) {
    return <div>Cargando.....</div>;
  }

  return (
    <div className='contenedorTexto'>
      <img className='contenedorImagen' src={pokemon.sprites.front_default} alt='imagen' />
      <h5 className='contenedorTitulo'>{pokemon.name}</h5>
      <p className='contenedorParrafo'>Origen:"silvestre"</p>
    </div>
  );
}

function CardContainer() {
  const cards = [];
  for (let i = 0; i < 10; i++) {
    cards.push(<Card key={i} />);
  }
  return <div className="card-container">{cards}</div>;
}

export default CardContainer;
