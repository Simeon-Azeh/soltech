import React from 'react';
import { Navigate } from 'react-router-dom';
import { getAuth } from "firebase/auth";

const ProtectedRoute = ({ element: Component, ...rest }) => {
  const auth = getAuth();
  const user = auth.currentUser;

  return user ? <Component {...rest} /> : <Navigate to="/login" />;
};

export default ProtectedRoute;