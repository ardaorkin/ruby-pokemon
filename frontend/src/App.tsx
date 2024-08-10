import { useState } from "react";
import "./App.css";
import { PokemonEditForm } from "./components/PokemonEditForm.tsx";
import { PokemonForm } from "./components/PokemonForm.tsx";
import { PokemonList } from "./components/PokemonList.tsx";
import { Pokemon } from "./types.ts";

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);
  const handleSelectPokemon = (pokemon: Pokemon) => {
    setSelectedPokemon(pokemon);
  };

  const handleEditFormClose = () => {
    setSelectedPokemon(null);
  };

  return (
    <div className="App">
      <PokemonForm />
      <PokemonList onSelectPokemon={handleSelectPokemon} />
      <PokemonEditForm
        pokemon={selectedPokemon}
        onClose={handleEditFormClose}
      />
    </div>
  );
}

export default App;
