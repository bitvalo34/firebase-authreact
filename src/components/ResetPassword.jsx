// Este componente permite a los usuarios solicitar un correo de restablecimiento de contraseña.
import React, { useState } from "react";
import { auth, sendPasswordResetEmail } from "../firebase";
import { useNavigate, Link } from "react-router-dom";
import { Container, TextField, Button, Typography, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

// Componente Paper estilizado para el restablecimiento de contraseña
const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: "2rem", // Espaciado interno
  marginTop: "2rem", // Margen superior
  background: "linear-gradient(45deg, #FF5722, #FF8A65)", // Fondo con degradado de naranjas
  borderRadius: "8px", // Bordes redondeados
  boxShadow: "0 3px 5px 2px rgba(255, 87, 34, 0.3)", // Sombra para efecto de profundidad
}));

const ResetPassword = () => {
  // Estados para el email, mensajes y errores
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Función para enviar el correo de restablecimiento de contraseña
  const handleReset = async (e) => {
    e.preventDefault(); // Evitar el comportamiento predeterminado del formulario
    setError(""); // Limpiar errores previos
    setMessage(""); // Limpiar mensajes previos
    try {
      await sendPasswordResetEmail(auth, email);
      // Mostrar mensaje de confirmación
      setMessage("Password reset email sent. Please check your inbox.");
    } catch (err) {
      setError(err.message); // Mostrar error si ocurre alguno
    }
  };

  return (
    <Container maxWidth="sm">
      <StyledPaper>
        {/* Título del formulario de restablecimiento de contraseña */}
        <Typography variant="h4" gutterBottom align="center">
          Reset Password
        </Typography>
        {/* Mostrar error o mensaje de confirmación */}
        {error && (
          <Typography color="error" align="center">
            {error}
          </Typography>
        )}
        {message && (
          <Typography color="primary" align="center">
            {message}
          </Typography>
        )}
        {/* Formulario para solicitar restablecimiento de contraseña */}
        <form onSubmit={handleReset}>
          {/* Campo para ingresar el email */}
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
          {/* Botón para enviar el formulario */}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: "1rem" }}
          >
            Send Reset Email
          </Button>
        </form>
        {/* Enlace para volver a la página de inicio de sesión */}
        <Typography
          variant="body2"
          align="center"
          style={{ marginTop: "1rem" }}
        >
          <Link to="/login">Back to Login</Link>
        </Typography>
      </StyledPaper>
    </Container>
  );
};

export default ResetPassword;
