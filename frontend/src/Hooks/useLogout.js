import { useAuthContext } from './useAuthContext.js';
import { useExercisesContext } from './useExercisesContext.js';
import { useGoalsContext } from './useGoalsContext.js';

export const useLogout = () =>  {
    const { dispatch } = useAuthContext();
    const { dispatch: dispatchExercises } = useExercisesContext();
    const { dispatch: dispatchGoals } = useGoalsContext();

    const logout = () => {
        localStorage.removeItem('user');
        dispatch({ type: 'LOGOUT' });
        dispatchExercises({ type: 'SET_EXERCISES', payload: null });
        dispatchGoals({ type: 'SET_GOALS', payload: null });
    };

    return { logout };

};

export default useLogout;
