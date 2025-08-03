import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js'; // ✅ 확장자 .js 명확히!
import reportWebVitals from './reportWebVitals.js'; // ✅ 여기도 .js!

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
