import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import style from "./TodoListItem.module.css";

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <div className={style.Body}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </div>
);
