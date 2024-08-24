import { useState } from 'react';
import { useAuthContext } from './useAuthContext.js';




export const UseSignup = () =>  {
    const { dispatch } = useAuthContext();
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);



    const signup = async (email, password) => {
        setIsLoading(true);
        setError(null);

        const response = await fetch('http://localhost:5000/api/user/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify({email, password}),
        });
        const data = await response.json();


        if (!response.ok) {
            setIsLoading(false);
            setError(data.error);
        }
        if (response.ok) {
            // save the user to local storage
            localStorage.setItem('user', JSON.stringify(data));
            dispatch({type: 'LOGIN', payload: data});
            setIsLoading(false);
        }
    }

	return { signup, isLoading, error }

}

export default UseSignup;
