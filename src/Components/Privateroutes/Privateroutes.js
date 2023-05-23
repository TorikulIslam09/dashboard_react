import React, { useContext } from 'react';
import { Authcontext } from '../AutheText/AutheText';
import { Navigate } from 'react-router-dom';

const Privateroutes = ({children}) => {
    const {user} = useContext(Authcontext)
    if(user && user.uid) {
        return children;
    };
    return <Navigate to="/login"></Navigate>
};

export default Privateroutes;