import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthProvider'; 
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div className="flex justify-center items-center min-h-screen">
            <span className="loading loading-bars loading-lg text-[#6F4E37]"></span>
        </div>;
    }

    if (user) {
        return children;
    }

    return <Navigate state={location.pathname} to="/signin" replace></Navigate>;
};

export default PrivateRoute;