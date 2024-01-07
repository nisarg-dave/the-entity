import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";

interface AnswerState {
  answer: string;
  riddleNumber: number;
  currentRiddles: { riddle: string; answer: string; crypticMessage: string }[];
  riddle: string;
  actions: {
    setAnswer: (newAnswer: string) => void;
    incrementRiddleNumber: () => void;
    setCurrentRiddles: (
      newRiddles: { riddle: string; answer: string; crypticMessage: string }[]
    ) => void;
    setRiddle: () => void;
  };
}

const useRiddleAnswerStore = create<AnswerState>((set) => ({
  answer: "",
  riddleNumber: 0,
  currentRiddles: [],
  riddle: "",
  actions: {
    setAnswer: (newAnswer) => set((state) => ({ answer: newAnswer })),
    incrementRiddleNumber: () =>
      set((state) => ({ riddleNumber: state.riddleNumber + 1 })),
    setCurrentRiddles: (newRiddles) =>
      set((state) => ({ currentRiddles: newRiddles })),
    setRiddle: () =>
      set((state) => ({
        riddle: state.currentRiddles[state.riddleNumber].riddle,
      })),
  },
}));

export const useRiddleAnswer = () =>
  useRiddleAnswerStore((state) => state.answer);
export const useRiddleNumber = () =>
  useRiddleAnswerStore((state) => state.riddleNumber);
export const useCurrentRiddles = () =>
  useRiddleAnswerStore((state) => state.currentRiddles);
export const useRiddle = () => useRiddleAnswerStore((state) => state.riddle);

export const useRiddleAnswerStoreActions = () =>
  useRiddleAnswerStore((state) => state.actions);

if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("Store", useRiddleAnswerStore);
}
