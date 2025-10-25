import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/AppBar/NavBar";

import { Pokeguess } from "./pages/Pokeguess";
import { Homepage } from "./pages/Homepage";
import Pokedex from "./pages/Pokedex";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { Toaster } from "sonner";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import PokeguessPlay from "./pages/PokeguessPlay";
export const App = () => {
  return (
    <>
      <Toaster richColors />
      <BrowserRouter>
        <NavBar />

        <Routes>
          {/* Define application routes here */}
          {/* Public route */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          <Route element={<ProtectedRoute />}>
            {/* Protected routes */}
            <Route path="/pokeguess" element={<Pokeguess />} />
            <Route path="/pokedex" element={<Pokedex />} />
            <Route path="/pokeguess/play" element={<PokeguessPlay />} />
            <Route path="/" element={<Homepage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
