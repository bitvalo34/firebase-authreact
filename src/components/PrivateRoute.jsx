// Este componente se utiliza para proteger rutas que solo deben ser accesibles para usuarios autenticados.
import React from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../firebase"; // Importamos la instancia de autenticación desde firebase.js

// Componente PrivateRoute que envuelve a las rutas protegidas
const PrivateRoute = ({ children }) => {
  // Se verifica si existe un usuario autenticado (auth.currentUser)
  // Si existe, se renderiza el contenido (children); de lo contrario, se redirige al login.
  return auth.currentUser ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
