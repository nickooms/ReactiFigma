import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

const FIGMA_TOKEN = '131048-174ca94f-2b4b-43df-b441-5d6cc84793bb';
const AVASCO_FILE_KEY = 'YnKVSZa6n17N9ISVjD3ZAT';

class API {
  constructor(baseURL, operations) {
    this._baseURL = baseURL;
    this._operations = operations;
    Object.assign(
      this,
      operations.map((operationName) => async (...args) => {
        const result = await this.operation(operationName, ...args);
        return result;
      })
    );
  }

  async operation(operationName, ...params) {
    const url = `${this.baseURL}/${operationName}/${params.join('/')}`;
    const headers = {
      'X-Figma-Token': FIGMA_TOKEN,
    };
    const options = { headers };
    const response = await fetch(url, options);
    const json = await response.json();
    return json;
  }
}

const api = new API('https://api.figma.com/v1', {
  files: ['key'],
});
// const user = 'https://api.figma.com/v1/me';
// const file = `https://api.figma.com/v1/files/${AVASCO_FILE_KEY}`;
// const projects = 'https://api.figma.com/v1/teams/:team_id/projects';

function App() {
  const [canvas, setCanvas] = useState(null);
  /* const getFile = async (key) => {
    const result = await api.files(key);
    // console.log(result);
    return result;
  }; */
  useEffect(() => {
    api.files(AVASCO_FILE_KEY).then((file) => {
      const canvas = file.document.children;
      console.log(canvas.map((c) => c.name).join('\n'));
    });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        {canvas && (
          <ul>
            {canvas.map((c) => (
              <li>{c.name}</li>
            ))}
          </ul>
        )}
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
