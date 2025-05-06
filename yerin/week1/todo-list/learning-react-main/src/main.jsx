import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';  // 확장자까지 명확하게!
import './index.css';         // 선택사항

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
