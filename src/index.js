import React from 'react';
import ReactDOM from 'react-dom/client';
import ScrollContextProvider from './store/scroll_context';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ScrollContextProvider>
      <App />
    </ScrollContextProvider>
  </React.StrictMode>
);
