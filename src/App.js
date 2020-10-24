import { useEffect, useState } from 'react';

import './App.css';

const BASE_URL = 'https://api.figma.com/v1';
const FIGMA_TOKEN = '131048-174ca94f-2b4b-43df-b441-5d6cc84793bb';
const AVASCO_FILE_KEY = 'YnKVSZa6n17N9ISVjD3ZAT';

const operation = async (...params) => {
  const url = `${BASE_URL}/${params.join('/')}`;
  const headers = {
    'X-Figma-Token': FIGMA_TOKEN,
  };
  const options = { headers };
  const response = await fetch(url, options);
  const json = await response.json();
  return json;
};

const App = () => {
  const [canvas, setCanvas] = useState(null);

  useEffect(() => {
    operation('files', AVASCO_FILE_KEY).then((file) => {
      const canvas = file.document.children;
      console.log(canvas.map((c) => c.name).join('\n'));
      setCanvas(canvas);
    });
  }, []);

  return (
    canvas && (
      <ul>
        {canvas.map((c) => (
          <li>{c.name}</li>
        ))}
      </ul>
    )
  );
};

export default App;
