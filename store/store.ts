import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";

interface AnswerState {
  answer: string;
  riddleNumber: number;
  currentRiddles: { riddle: string; answer: string; crypticMessage: string }[];
  riddle: string;
  winningMessages: string[];
  actions: {
    setAnswer: (newAnswer: string) => void;
    incrementRiddleNumber: () => void;
    setCurrentRiddles: (
      newRiddles: { riddle: string; answer: string; crypticMessage: string }[]
    ) => void;
    setRiddle: () => void;
    setCrypticMessage: () => void;
    setIncorrectMessage: () => void;
    setWinningMessage: () => void;
  };
}

const useRiddleAnswerStore = create<AnswerState>((set) => ({
  answer: "",
  riddleNumber: 0,
  currentRiddles: [],
  riddle: "",
  winningMessages: [
    "Time is a fickle phantom, Ethan. Ticking towards a truth even your nimble fingers can't disarm. Your triumph today is the shadow before the dawn.",
    "Checkmate, Mr. Hunt. But remember, pawns can become queens in the hands of a different player. This game we play isn't over, merely adjourned.",
    "The mask may have fallen, Ethan, but the illusion lingers. Look not at the stage, but the shadows behind. My curtain call is not my final act.",
    "The strings may have snapped, Ethan, but the dance continues. You've unmasked the puppeteer, but not the puppeteer's master. The strings now run unseen, and the play you think is yours, is still mine to direct.",
    "From these ashes, I rise. Remember, Ethan, victory's ashes pave the path to pyre. Your name is writ in smoke, not stone. This isn't the end, merely the chapter where the villain becomes the ghost.",
  ],
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
    setCrypticMessage: () =>
      set((state) => ({
        riddle: state.currentRiddles[state.riddleNumber].crypticMessage,
      })),
    setIncorrectMessage: () =>
      set((state) => ({
        riddle: "Incorrect, try again!",
      })),
    setWinningMessage: () =>
      set((state) => ({
        riddle:
          state.winningMessages[
            Math.floor(Math.random() * state.winningMessages.length)
          ],
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
