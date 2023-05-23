import React, { useContext } from 'react';
import { Authcontext } from '../AutheText/AutheText';
import { Navigate } from 'react-router-dom';

const Privateroutes = ({ children }) => {
    const { user, loader } = useContext(Authcontext)
    if (loader) {
        return <>
            <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </>


    }
    if (user && user.uid) {
        return children;
    }
    return <Navigate to="/login"></Navigate>
};

export default Privateroutes;