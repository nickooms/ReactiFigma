import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";

// const projects = 'https://api.figma.com/v1/teams/:team_id/projects';

function App() {
  const login = async () => {
    const response = await fetch("https://api.figma.com/v1/me", {
      headers: {
        "X-Figma-Token": "131048-174ca94f-2b4b-43df-b441-5d6cc84793bb",
      },
    });
    console.log(await response.json());
  };
  useEffect(() => {
    login();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
