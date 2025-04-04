import { createContext, useContext } from 'react';
import ReactDOM from 'react-dom/client';
import colors from './color-data.json';
import './index.css';
import App from './App';

export const ColorContext = createContext();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ColorContext.Provider value={{ colors }}>
    <App />
  </ColorContext.Provider>
);
