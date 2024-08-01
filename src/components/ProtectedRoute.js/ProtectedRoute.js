// components/ProtectedRoute.js

import React from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../../utils/auth';

const ProtectedRoute = ({ children, requiredUserType }) => {
    if (!isAuthenticated(requiredUserType)) {
        return <Navigate to="/join" />;
    }

    return children;
};

export default ProtectedRoute;
