import { emulateCodeExecution } from "@/components/Lesson/CodePanel/CodePanelEditor/CodePanelEditor";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type LessonStoreType = {
  userInput: string;
  setUserInput: (value: string) => void;
  isExecuting: boolean;
  results: any;
  runCode: (problemId: string) => Promise<void>;
};

export const useLessonStore = create<LessonStoreType>()(
  persist(
    (set, get) => ({
      userInput: "",
      isExecuting: false,
      results: null,

      setUserInput: (value: string) => set({ userInput: value }),

      runCode: async (problemId: string) => {
        set({ isExecuting: true });

        try {
          const result = await emulateCodeExecution(get().userInput, problemId);

          set({
            results: result,
            isExecuting: false,
          });
          const params = new URLSearchParams(window.location.search);
          params.set("tab", "result");
          const newUrl = `${window.location.pathname}?${params.toString()}`;

          window.history.replaceState(null, "", newUrl);

          window.dispatchEvent(new Event("popstate"));
        } catch (error) {
          set({
            isExecuting: false,
            results: { status: "error", message: "Crash!" },
          });
        }
      },
    }),
    {
      name: "lesson-storage",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        userInput: state.userInput,
      }),
    },
  ),
);
