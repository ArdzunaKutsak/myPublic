import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client'
import App from './App';
import VisualVersion from './assests/visualVersion';

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context.Provider
      value={{
        visualVersion: new VisualVersion()
      }}>
      <App />
    </Context.Provider>
  </React.StrictMode>
);
