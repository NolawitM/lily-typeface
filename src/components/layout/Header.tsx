import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="app-header">
      <div className="brand">
        <span className="brand-mark">A</span>

        <div>
          <strong>Amharic Typeface</strong>
          <span>Type design, reimagined.</span>
        </div>
      </div>

      <ThemeToggle />
    </header>
  );
}