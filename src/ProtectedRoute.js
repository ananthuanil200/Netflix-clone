// src/ProtectedRoute.js
import React from 'react';
import { useAuth } from '@clerk/clerk-react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element }) => {
  const { isSignedIn } = useAuth();
  
  return isSignedIn ? element : <Navigate to="/Sign-in" />;
};

export default ProtectedRoute;
