import { createContext, useReducer } from 'react';

export const ExerciseContext = createContext();

export const exerciseReducer = (state, action) => {
  switch (action.type) {
    case 'SET_EXERCISES':
      return {
        exercises: action.payload,
      }
    case 'CREATE_EXERCISE':
      return {
        exercises: [action.payload, ...state.exercises],
      }
      default:
        return state
  }
}

export const ExerciseContextProvider = ({ children }) =>  {
  const [state, dispatch] = useReducer(exerciseReducer, {
    exercises: null,

  });

return (
  <ExerciseContext.Provider value={{state, dispatch}}>
      { children }
    </ExerciseContext.Provider>
);
  }

  export default ExerciseContext;
