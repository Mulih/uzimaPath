import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext.js';

export const UseAuthContext = () =>  {
    const context = useContext(AuthContext);

    if (!context) {
        throw Error('useAuthContext must be used inside an AuthContextProvider');
    }
	return (
	  <div>
	  </div>
	);
  }

export default UseAuthContext;
