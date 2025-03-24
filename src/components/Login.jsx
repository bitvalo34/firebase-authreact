// Este componente maneja el inicio de sesión del usuario.
import React, { useState } from "react";
import {
  auth,
  signInWithEmailAndPassword,
  signInWithPopup,
  googleProvider,
  githubProvider,
} from "../firebase";
import { useNavigate, Link } from "react-router-dom";
import {
  Container,
  TextField,
  Button,
  Typography,
  Grid,
  Paper,
} from "@mui/material";

import { styled } from "@mui/material/styles";

// Se crea un componente Paper estilizado con un fondo degradado y sombra para dar una apariencia moderna
const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: "2rem", // Espaciado interno del contenedor
  marginTop: "2rem", // Margen superior
  background: "linear-gradient(45deg, #4CAF50, #81C784)", // Fondo con degradado de verdes
  borderRadius: "8px", // Bordes redondeados
  boxShadow: "0 3px 5px 2px rgba(76, 175, 80, 0.3)", // Sombra para efecto de profundidad
}));

const Login = () => {
  // Definición de estados para email, contraseña y manejo de errores
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Función para manejar el inicio de sesión con email y contraseña
  const handleLogin = async (e) => {
    e.preventDefault(); // Prevenir el comportamiento por defecto del formulario
    setError(""); // Limpiar errores previos
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard"); // Redirigir al Dashboard tras un inicio de sesión exitoso
    } catch (err) {
      setError(err.message); // Mostrar error si ocurre alguno
    }
  };

  // Función para iniciar sesión usando Google
  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  // Función para iniciar sesión usando GitHub
  const handleGithubLogin = async () => {
    try {
      await signInWithPopup(auth, githubProvider);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Container maxWidth="sm">
      <StyledPaper>
        {/* Título del formulario de inicio de sesión */}
        <Typography variant="h4" gutterBottom align="center">
          Login
        </Typography>
        {/* Mostrar mensaje de error si existe */}
        {error && (
          <Typography color="error" align="center">
            {error}
          </Typography>
        )}
        {/* Formulario para iniciar sesión */}
        <form onSubmit={handleLogin}>
          {/* Campo para el email */}
          <TextField
            label="Email"
            variant="outlined"
            margin="normal"
            fullWidth
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {/* Campo para la contraseña */}
          <TextField
            label="Password"
            variant="outlined"
            margin="normal"
            fullWidth
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {/* Botón para enviar el formulario */}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: "1rem" }}
          >
            Login
          </Button>
        </form>
        {/* Opciones para iniciar sesión con proveedores federados */}
        <Grid container spacing={2} style={{ marginTop: "1rem" }}>
          <Grid item xs={6}>
            <Button
              variant="outlined"
              color="secondary"
              fullWidth
              onClick={handleGoogleLogin}
            >
              Login with Google
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              variant="outlined"
              color="secondary"
              fullWidth
              onClick={handleGithubLogin}
            >
              Login with GitHub
            </Button>
          </Grid>
        </Grid>
        {/* Enlaces para recuperar contraseña y para registrarse */}
        <Typography
          variant="body2"
          align="center"
          style={{ marginTop: "1rem" }}
        >
          <Link to="/reset-password">Forgot Password?</Link>
        </Typography>
        <Typography
          variant="body2"
          align="center"
          style={{ marginTop: "1rem" }}
        >
          Don’t have an account? <Link to="/register">Register here</Link>
        </Typography>
      </StyledPaper>
    </Container>
  );
};

export default Login;
