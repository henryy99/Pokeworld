import Nav from "./components/Nav";

import { UserProvider } from "./context/UserContext";
import { Route, Routes } from "react-router";
import HomePage from "./pages/home/HomePage";
import Pokeguess from "./pages/pokeguess/Pokeguess";
import Pokedex from "./pages/pokedex/Pokedex";
import { PokemonProvider } from "./context/PokemonContext";
function App() {
  return (
    <>
      <UserProvider>
        <div className="w-screen h-screen">
          <Nav />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/pokeguess"
              element={
                <PokemonProvider>
                  <Pokeguess />
                </PokemonProvider>
              }
            />
            <Route path="/pokedex" element={<Pokedex />} />
          </Routes>
        </div>
      </UserProvider>
    </>
  );
}

export default App;
