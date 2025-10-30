import type { PokeguessSessionState } from "@/types/store";
import { create } from "zustand";
export const usePokeguessSessionStore = create<PokeguessSessionState>(
  (set) => ({
    score: 0,
    level: 1,
    correctStreak: 0,
    health: 0,

    incrementScore: (points: number) =>
      set((state) => ({
        score: state.score + points,
        correctStreak: state.correctStreak + 1,
      })),
    nextLevel: () =>
      set((state) => ({
        level: state.level + 1,
      })),
    decrementHealth: () =>
      set((state) => ({
        health: state.health - 1,
      })),
    resetGame: () =>
      set({
        score: 0,
        level: 1,
        correctStreak: 0,
        health: 3,
      }),
  })
);
