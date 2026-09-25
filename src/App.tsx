import Header from "./components/layout/Header";

function App() {
  return (
    <div className="app">
      <Header />

      <main className="app-main">
        <section className="hero">
          <span className="eyebrow">ETHIOPIC TYPE DESIGN</span>

          <h1>
            Create your own
            <br />
            <span>Amharic typeface.</span>
          </h1>

          <p>
            Design one character and explore how your style can evolve
            throughout its family.
          </p>

          <button className="primary-button">
            Start designing
          </button>
        </section>
      </main>
    </div>
  );
}

export default App;