// src/RedirectHandler.js
import React from 'react';
import { useAuth } from '@clerk/clerk-react';
import { Navigate } from 'react-router-dom';

const RedirectHandler = () => {
  const { isSignedIn } = useAuth();
  
  // Redirect based on authentication state
  return isSignedIn ? <Navigate to="/Main" /> : <Navigate to="/Sign-in" />;
};

export default RedirectHandler;
