import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { createGlobalStyle } from 'styled-components';
import './assets/icons/bootstrap-icons.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-y: scroll;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }
`;

root.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>
);
