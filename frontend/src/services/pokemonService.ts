import api from "@/lib/axios";

export const pokemonService = {
  generateRandomPokemon: async () => {
    const response = await api.get("/pokemon/random");
    return response.data.pokemon;
  },
};
