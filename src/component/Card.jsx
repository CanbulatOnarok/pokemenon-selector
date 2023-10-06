import React, { useState } from 'react';
import "../style/Card.css";

const Card = ({ getData }) => {
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const shuffledData = getData.slice().sort(() => Math.random() - 0.5);

  const handlePokemonClick = (pokemon) => {
    setSelectedPokemon(pokemon);
  };

  return (
    <div className="card-list">
      {shuffledData.map(pokemon => (
        <div key={pokemon.id} className="card">
          <li onClick={() => handlePokemonClick(pokemon)}>
            <p className='name-area'>{pokemon.name.english}</p>
            <p>Species: {pokemon.species}</p>
            <p>Height: {pokemon.profile.height}</p>
            <p>Weight: {pokemon.profile.weight}</p>
          </li>
          <img src={pokemon.image.hires} alt="" />
        </div>
      ))}
    </div>
  );
};

export default Card;
