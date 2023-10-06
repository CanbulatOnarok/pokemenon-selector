import React, { useState } from 'react';
import "../style/Card.css";

const Card = ({ getData }) => {
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const handlePokemonClick = (pokemon) => {
    setSelectedPokemon(pokemon);
  };

  return (
    <div className="card-list">
      {getData.map(pokemon => (
        <div key={pokemon.id} className="card">
          <li onClick={() => handlePokemonClick(pokemon)}>
            <p>Name: {pokemon.name.english}</p>
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
