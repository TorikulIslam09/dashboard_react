import React, { createContext } from 'react';
import {createUserWithEmailAndPassword , getAuth, signInWithEmailAndPassword  } from "firebase/auth";
import app from '../Firebase/Firebase';


const auth = getAuth(app);
export const Authcontext = createContext();

const AutheText = ({children}) => {

const user = {name: 'torikul vai'}

    const Login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
        
    const Ragister = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }



    const Authvalue = {Ragister,Login}

    return (
            <Authcontext.Provider value={Authvalue}>
                {children}
            </Authcontext.Provider>
    );
};

export default AutheText;