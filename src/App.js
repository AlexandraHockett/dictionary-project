import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <strong>Dictionary</strong>
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">
          <small>
            Coded by{" "}
            <a
              href="https://www.linkedin.com/in/alexandra-hockett/"
              target="_blank"
              rel="noreferrer"
            >
              Alexandra Hockett{" "}
            </a>
            and is{" "}
            <a
              href="https://github.com/AlexandraHockett/dictionary-project"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced on GitHub
            </a>{" "}
            <img
              src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/011/418/original/b3d67fb045323dea1e59cc09991d3c1e.gif?1624469159"
              alt="minnieCoder"
            />
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
