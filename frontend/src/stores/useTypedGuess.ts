import type { TypedGuess } from "@/types/store";
import { create } from "zustand";

export const useTypedGuessStore = create<TypedGuess>((set, get) => ({
  typedGuess: "",

  removeLastChar: () => {
    const current = get().typedGuess;
    if (!current) {
      return;
    } // nothing to remove
    set({ typedGuess: current.slice(0, -1) });
  },
  addChar: (letter) => {
    set((state) => ({
      typedGuess: state.typedGuess + letter,
    }));
  },
  resetTypedGuess: () => set({ typedGuess: "" }),
}));
