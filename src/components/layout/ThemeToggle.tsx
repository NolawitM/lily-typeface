import { useEditorStore } from "../../store/editorStore";

export default function ThemeToggle() {
  const theme = useEditorStore((state) => state.theme);
  const toggleTheme = useEditorStore((state) => state.toggleTheme);

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? "Dark" : "Light"}
    </button>
  );
}