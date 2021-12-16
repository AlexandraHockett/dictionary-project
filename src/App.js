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
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
