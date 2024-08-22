import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import { exerciseContextProvider } from './context/ExerciseContext.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <exerciseContextProvider>
       <App />
     </exerciseContextProvider>
  </React.StrictMode>
);
