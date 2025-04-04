import ReactDOM from 'react-dom/client';
import ColorProvider from './Hooks/useColors';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ColorProvider>
    <App />
  </ColorProvider>
);
