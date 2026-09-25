import { create } from "zustand";

type Theme = "light" | "dark";

interface EditorState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

export const useEditorStore = create<EditorState>((set) => ({
  theme: "light",

  setTheme: (theme) => {
    set({ theme });
    document.documentElement.dataset.theme = theme;
  },

  toggleTheme: () => {
    set((state) => {
      const newTheme = state.theme === "light" ? "dark" : "light";

      document.documentElement.dataset.theme = newTheme;

      return {
        theme: newTheme,
      };
    });
  },
}));