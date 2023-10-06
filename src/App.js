import "../src/style/App.css";
import Input from "./component/Input";
import Card from "./component/Card";
import { useEffect, useState } from "react";

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);

  const getData = async () => {
  
      let url = "http://localhost:3005/pokemon";
      const response = await fetch(url);
      const pokemon = await response.json();
      setPokemonData(pokemon);
 
  };
  const handleChange = (event) => {
    const dataFind = event.target.value.toLowerCase();

    const filteredPokemons = pokemonData.filter((pokemon) =>
      pokemon.name.english.toLowerCase().includes(dataFind)
    );

    setFilteredPokemons(filteredPokemons);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Input handleChange={handleChange} />
      <Card getData={filteredPokemons.length > 0 ? filteredPokemons : pokemonData}/>
    </>
  );
}

export default App;