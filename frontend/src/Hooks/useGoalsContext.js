import { useContext } from 'react';
import { GoalsContext } from '../context/GoalsContext.js';

export const useGoalsContext = () => {
  const context = useContext(GoalsContext);

  if (context === undefined) {
    throw new Error('useGoalContext must be used within an GoalsContextProvider');
  }

  return context;
};


export default useGoalsContext;