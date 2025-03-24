// Componente principal de la aplicación que configura las rutas usando React Router
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import ResetPassword from "./components/ResetPassword";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  // Retorna el conjunto de rutas para la aplicación
  return (
    <Router>
      <Routes>
        {/* Ruta para el registro de nuevos usuarios */}
        <Route path="/register" element={<Register />} />
        {/* Ruta para iniciar sesión */}
        <Route path="/login" element={<Login />} />
        {/* Ruta para la recuperación de contraseña */}
        <Route path="/reset-password" element={<ResetPassword />} />
        {/* Ruta protegida que solo se puede acceder si el usuario está autenticado */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        {/* Ruta por defecto redirige a la página de login */}
        <Route path="*" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
