import { ExercisesContext } from '../context/ExercisesContext.js';
import { useContext } from 'react';

export const useExercisesContext = () =>  {
  const context = useContext(ExercisesContext);

  if (!context) {
    throw Error('useExerciseContext must be used inside an ExerciseContextProvider');
  }

  return context;
}

export default useExercisesContext;
