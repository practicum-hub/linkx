import { create } from "zustand";

type LessonState = {
  totalExercises: number;
  currentIndex: number;
  isCompleted: boolean;

  userInput: string;
  setUserInput: (value: string) => void;

  setTotal: (total: number) => void;
  next: () => void;
  reset: () => void;
  check: (exerciseId: number) => void;
};

export const useLessonStore = create<LessonState>((set, get) => ({
  totalExercises: 0,
  currentIndex: 0,
  isCompleted: false,

  userInput: "",
  setUserInput: (value: string) => set({ userInput: value }),

  setTotal: (total: number) =>
    set({
      totalExercises: total,
    }),
  next: () =>
    set((state) => {
      if (state.currentIndex + 1 >= state.totalExercises) {
        return { isCompleted: true };
      }

      return { currentIndex: state.currentIndex + 1, userInput: "" };
    }),
  reset: () =>
    set({
      currentIndex: 0,
      isCompleted: false,
    }),
  check: () =>
    set((state) => {
      console.log("Hello Check");

      const userInput = get().userInput;
      if (userInput.length < 0) return state;

      if (state.currentIndex + 1 >= state.totalExercises) {
        console.log("Why");
        return { isCompleted: true };
      }

      console.log("Increment");
      return { currentIndex: state.currentIndex + 1, userInput: "" };
    }),
}));
