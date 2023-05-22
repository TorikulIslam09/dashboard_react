import React, { createContext } from 'react';
import { getAuth } from "firebase/auth";
import app from '../Firebass/Firebass'


const auth = getAuth(app);
export const AuthInfo = createContext()
const Authcontext = ({children}) => {
    const user = {name: 'torikul islam rupok'}
   const Authvalue = {user:user}
    return (
        <AuthInfo.Provider value={Authvalue}>
            {
                children
            }
        </AuthInfo.Provider>
    );
};

export default Authcontext;