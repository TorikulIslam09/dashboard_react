import React, { createContext, useEffect, useState } from 'react';
import { onAuthStateChanged, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../Firebase/Firebase';


const auth = getAuth(app);
export const Authcontext = createContext();

const AutheText = ({ children }) => {
    const [user, setuser] = useState([])


    const Login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const Ragister = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
       const userunsubcribe =  onAuthStateChanged(auth, (curentuser) => {
            setuser(curentuser)
        })
        return userunsubcribe()
    }, [])

    const Authvalue = { Ragister, Login, user }

    return (
        <Authcontext.Provider value={Authvalue}>
            {children}
        </Authcontext.Provider>
    );
};

export default AutheText;