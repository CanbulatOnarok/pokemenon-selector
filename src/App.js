import "../src/style/App.css";
import Input from "./component/Input";
import Card from "./component/Card";
import { useEffect, useState } from "react";

function App() {
  const [pokemonData, setPokemonData] = useState([]);

  const getData = async () => {
  
      let url = "http://localhost:3005/pokemon";
      const response = await fetch(url);
      const pokemon = await response.json();
      setPokemonData(pokemon);
 
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <body>
      <Input />
      <Card getData={pokemonData} />
    </body>
  );
}

export default App;
