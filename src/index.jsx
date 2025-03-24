// Archivo principal que arranca la aplicación React
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// Importamos ThemeProvider y CssBaseline para aplicar el tema de Material UI
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";

// Obtenemos el elemento con id "root" definido en index.html
const rootElement = document.getElementById("root");
if (!rootElement) {
  // Lanzamos un error si no se encuentra el elemento, lo que ayuda a depurar
  throw new Error('No se encontró el elemento con id "root". Verifica tu index.html.');
}

// Usamos createRoot para inicializar la aplicación en React 18+
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    {/* Envolvemos la aplicación en ThemeProvider para aplicar el tema personalizado */}
    <ThemeProvider theme={theme}>
      {/* CssBaseline aplica estilos base para un diseño consistente */}
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
