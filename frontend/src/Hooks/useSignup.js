import { useState } from 'react';
import { useAuthContext } from './useAuthContext.js';

export const useSignup = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);

    const { dispatch } = useAuthContext();

    const signup = async (firstName, lastName, email, password) => {
        setIsLoading(true);
        setError(null);

        const response = await fetch('http://localhost:5000/api/user/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ firstName, lastName, email, password }),
        });
        const data = await response.json();

        if (!response.ok) {
            setIsLoading(false);
            setError(data.error);
        }

        if (response.ok) {
            // save the user to local storage
            localStorage.setItem('user', JSON.stringify(data));
            // update the auth context
            dispatch({ type: 'LOGIN', payload: data });
            // update loading state
            setIsLoading(false);
        }
    };

    return { signup, isLoading, error };
};

export default useSignup;