import type { Hints, PokemonInfo } from "./pokemon";
import type { User } from "./user";
//Auth State Interface
export interface AuthState {
  accessToken: string | null;
  user: User | null;
  loading: boolean;

  getUsername: () => string;
  clearState: () => void;
  signUp: (
    username: string,
    password: string,
    email: string,
    displayName: string
  ) => Promise<void>;
  signIn: (username: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  fetchMe: () => Promise<void>;
  refresh: () => Promise<void>;
  setAccessToken: (token: string) => void;
}
//Pokeguess Game Session State Interface
export interface PokeguessSessionState {
  score: number;
  level: number;
  correctStreak: number;
  health: number;
  incrementScore: (points: number) => void;
  nextLevel: () => void;
  resetGame: () => void;
}
//Pokeguess Guess State Interface
export interface PokeguessLevelState {
  wrongGuessesLeft: number;
  guessedPokemon: string[];
  hints: Hints;
  isGameOver: boolean;
  isLoading: boolean;
  pokemon: null | PokemonInfo;

  generateRandomPokemon: () => Promise<void>;
  makeGuess: (pokemonName: string) => void;
  resetGuesses: () => void;
  setHints: (pokemon: PokemonInfo) => void;
}
