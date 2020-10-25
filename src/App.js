import { useEffect, useState /* , useCallback */ } from 'react';

import CanvasList from './CanvasList';

import './App.css';

const BASE_URL = 'https://api.figma.com/v1';
const FIGMA_TOKEN = '131048-174ca94f-2b4b-43df-b441-5d6cc84793bb';
const AVASCO_FILE_KEY = 'YnKVSZa6n17N9ISVjD3ZAT';

const api = async (...params) => {
  const url = `${BASE_URL}/${params.join('/')}`;
  const headers = { 'X-Figma-Token': FIGMA_TOKEN };
  const options = { headers };
  const response = await fetch(url, options);
  const json = await response.json();
  console.log(JSON.stringify(json, null, 2));
  return json;
};

const getFile = async (key) => api('files', key);

const App = () => {
  const [canvasList, setCanvasList] = useState(null);
  // const [activeCanvas, setActiveCanvas] = useState(null);

  useEffect(() => {
    getFile(AVASCO_FILE_KEY).then((file) => {
      const { children } = file.document;
      setCanvasList(children);
      console.log(children);
    });
  }, []);

  // const onClickItem = useCallback();

  if (!canvasList) {
    return 'Loading...';
  }

  return <CanvasList onClickItem={() => {}}>{canvasList}</CanvasList>;
  /* const canvasItems =
    canvasList && canvasList.map((canvas) => <li>{canvas.name}</li>);

  return <ul>{canvasItems}</ul>; */
};

export default App;
