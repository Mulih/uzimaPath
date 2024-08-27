import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import { ExercisesContextProvider } from './context/ExercisesContext.js';
import { AuthContextProvider } from './context/AuthContext.js';
import { GoalsContextProvider } from './context/GoalsContext.js';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <GoalsContextProvider>
        <ExercisesContextProvider>
          <App />
        </ExercisesContextProvider>
      </GoalsContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
