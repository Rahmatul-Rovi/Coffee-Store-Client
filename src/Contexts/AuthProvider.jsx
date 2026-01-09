import React, { createContext } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';

// এই কনটেক্সটটিই আমরা সব জায়গায় ব্যবহার করব
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => { 
    
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const userInfo = {
        createUser
    };

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;