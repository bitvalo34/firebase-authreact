// Componente del Dashboard, muestra información del usuario y permite actualizar el display name
import React, { useEffect, useState } from "react";
import { auth, signOut, updateProfile } from "../firebase";
import { useNavigate } from "react-router-dom";
import { Container, Typography, Button, TextField, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";

// Definición de estilos personalizados para el Dashboard
const useStyles = makeStyles({
  paper: {
    padding: "2rem", // Espaciado interno
    marginTop: "2rem", // Margen superior
    background: "linear-gradient(45deg, #2196F3, #21CBF3)", // Fondo degradado azul
    borderRadius: "8px", // Bordes redondeados
    boxShadow: "0 3px 5px 2px rgba(33, 203, 243, .3)", // Sombra para efecto de profundidad
  },
});

const Dashboard = () => {
  const classes = useStyles(); // Aplicación de estilos personalizados
  const [user, setUser] = useState(null); // Estado para el usuario actual
  const [newDisplayName, setNewDisplayName] = useState(""); // Estado para el nuevo display name
  const [message, setMessage] = useState(""); // Estado para mensajes de confirmación o error
  const navigate = useNavigate();

  // useEffect para actualizar el estado del usuario al cargar el componente
  useEffect(() => {
    setUser(auth.currentUser);
  }, []);

  // Función para cerrar sesión
  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  // Función para actualizar el display name del usuario
  const handleUpdateProfile = async () => {
    try {
      if (auth.currentUser) {
        await updateProfile(auth.currentUser, { displayName: newDisplayName });
        setMessage("Display name updated successfully!");
        setUser({ ...auth.currentUser });
      }
    } catch (err) {
      setMessage(err.message);
    }
  };

  // Si el usuario no está cargado, se muestra un mensaje de "Loading..."
  if (!user) {
    return (
      <Container>
        <Typography>Loading...</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="sm">
      {/* Contenedor estético con Paper */}
      <Paper className={classes.paper}>
        {/* Título del Dashboard */}
        <Typography variant="h4" gutterBottom align="center">
          Dashboard
        </Typography>
        {/* Mensaje de bienvenida que muestra el displayName o email */}
        <Typography variant="body1" align="center">
          Welcome, {user.displayName || user.email}
        </Typography>
        {/* Botón para cerrar sesión */}
        <Button
          variant="contained"
          color="secondary"
          onClick={handleLogout}
          fullWidth
          style={{ marginTop: "1rem" }}
        >
          Logout
        </Button>
        {/* Sección para actualizar el display name */}
        <Typography variant="h6" align="center" style={{ marginTop: "2rem" }}>
          Update Display Name
        </Typography>
        <TextField
          label="New Display Name"
          variant="outlined"
          fullWidth
          value={newDisplayName}
          onChange={(e) => setNewDisplayName(e.target.value)}
          style={{ marginTop: "1rem" }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleUpdateProfile}
          fullWidth
          style={{ marginTop: "1rem" }}
        >
          Update
        </Button>
        {/* Mostrar mensaje de confirmación o error */}
        {message && (
          <Typography align="center" style={{ marginTop: "1rem" }}>
            {message}
          </Typography>
        )}
      </Paper>
    </Container>
  );
};

export default Dashboard;
