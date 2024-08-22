import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import { ExercisesContextProvider } from './context/ExercisesContext.js';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <ExercisesContextProvider>
       <App />
     </ExercisesContextProvider>
  </React.StrictMode>
);
