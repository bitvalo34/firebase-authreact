// Componente de registro de usuario con diseño estético mejorado mediante Material UI
import React, { useState } from "react";
import {
  auth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  googleProvider,
  githubProvider,
  updateProfile,
} from "../firebase";
import { useNavigate } from "react-router-dom";
import {
  TextField,
  Button,
  Typography,
  Container,
  Grid,
  Paper,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

// Definición de estilos personalizados para el componente
const useStyles = makeStyles({
  paper: {
    padding: "2rem", // Espaciado interno
    marginTop: "2rem", // Margen superior
    background: "linear-gradient(45deg, #FE6B8B, #FF8E53)", // Fondo con degradado
    borderRadius: "8px", // Bordes redondeados
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)", // Sombra para efecto de profundidad
  },
});

const Register = () => {
  const classes = useStyles(); // Uso de los estilos personalizados definidos
  const [email, setEmail] = useState(""); // Estado para el email del usuario
  const [password, setPassword] = useState(""); // Estado para la contraseña
  const [displayName, setDisplayName] = useState(""); // Estado para el nombre de usuario
  const [error, setError] = useState(""); // Estado para almacenar mensajes de error
  const navigate = useNavigate(); // Hook para navegación entre rutas

  // Función para manejar el registro del usuario con email y contraseña
  const handleRegister = async (e) => {
    e.preventDefault(); // Prevenir el comportamiento predeterminado del formulario
    setError(""); // Limpiar errores previos
    try {
      // Crear el usuario en Firebase Authentication
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      // Actualizar el perfil del usuario con el displayName ingresado
      await updateProfile(user, { displayName });
      // Navegar al Dashboard tras registro exitoso
      navigate("/dashboard");
    } catch (err) {
      // Si ocurre un error, se actualiza el estado error con el mensaje correspondiente
      setError(err.message);
    }
  };

  // Función para el registro utilizando el proveedor de Google
  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  // Función para el registro utilizando el proveedor de GitHub
  const handleGithubSignIn = async () => {
    try {
      await signInWithPopup(auth, githubProvider);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Container maxWidth="sm">
      {/* Usamos Paper para crear un contenedor con efectos estéticos */}
      <Paper className={classes.paper}>
        {/* Título del formulario de registro */}
        <Typography variant="h4" gutterBottom align="center">
          Register
        </Typography>
        {/* Mostrar mensaje de error si existe */}
        {error && <Typography color="error">{error}</Typography>}
        <form onSubmit={handleRegister}>
          {/* Campo para ingresar el Display Name */}
          <TextField
            label="Display Name"
            variant="outlined"
            margin="normal"
            fullWidth
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            required
          />
          {/* Campo para ingresar el Email */}
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
          {/* Campo para ingresar la Password */}
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
          {/* Botón para enviar el formulario y registrar el usuario */}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: "1rem" }}
          >
            Register
          </Button>
        </form>
        {/* Opciones para registrar con proveedores federados */}
        <Grid container spacing={2} style={{ marginTop: "1rem" }}>
          <Grid item xs={6}>
            <Button
              variant="outlined"
              color="secondary"
              fullWidth
              onClick={handleGoogleSignIn}
            >
              Register with Google
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              variant="outlined"
              color="secondary"
              fullWidth
              onClick={handleGithubSignIn}
            >
              Register with GitHub
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Register;
