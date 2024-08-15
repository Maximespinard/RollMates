import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import './globals.css';
import './i18n';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
