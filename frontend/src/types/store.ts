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
  decrementHealth: () => void;
}
//Pokeguess Guess State Interface
export interface PokeguessLevelState {
  wrongGuessesLeft: number;
  guessedPokemon: string[];
  hints: Hints;
  isLevelOver: boolean;
  isLoading: boolean;
  pokemon: null | PokemonInfo;
  currentGuessIndex: number;

  generateRandomPokemon: () => Promise<void>;
  makeGuess: (pokemonName: string) => void;
  resetGuesses: () => void;
  getPokemonName: () => string;
  setHints: (pokemon: PokemonInfo) => void;
  setLevelOver: () => void;
}

export interface TypedGuess {
  typedGuess: string;
  removeLastChar: () => void;
  addChar: (letter: string) => void;
  resetTypedGuess: () => void;
}
