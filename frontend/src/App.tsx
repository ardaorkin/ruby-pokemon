import { useEffect, useState } from "react";
import "./App.css";
import { PokemonEditForm } from "./components/PokemonEditForm.tsx";
import { PokemonForm } from "./components/PokemonForm.tsx";
import { PokemonList } from "./components/PokemonList.tsx";
import { Pokemon } from "./types.ts";
import { Button, Flex } from "antd";
import { Auth } from "./components/Auth/Auth.tsx";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);
  const handleSelectPokemon = (pokemon: Pokemon) => {
    setSelectedPokemon(pokemon);
  };

  const handleEditFormClose = () => {
    setSelectedPokemon(null);
  };

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    setIsAuth(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    window.location.reload();
  };

  if (!isAuth) {
    return (
      <Flex justify="center" align="center">
        <Auth />
      </Flex>
    );
  }

  return (
    <div className="main">
      <Button className="logout-btn" onClick={handleLogout}>
        Logout
      </Button>
      <div className="App">
        <PokemonForm />
        <PokemonList onSelectPokemon={handleSelectPokemon} />
        <PokemonEditForm
          pokemon={selectedPokemon}
          onClose={handleEditFormClose}
        />
      </div>
    </div>
  );
}

export default App;
