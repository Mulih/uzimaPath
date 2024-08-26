import { useAuthContext } from './useAuthContext.js';
import { useExercisesContext } from './useExercisesContext.js';

export const useLogout = () =>  {
    const { dispatch } = useAuthContext();
    const { dispatch: dispatchExercises } = useExercisesContext();

    const logout = () => {
        localStorage.removeItem('user');
        dispatch({ type: 'LOGOUT' });
        dispatchExercises({ type: 'SET_EXERCISES', payload: null });
    };

    return { logout };

};

export default useLogout;
