// Este archivo configura un tema personalizado para Material UI
import { createTheme } from "@mui/material/styles";

// Definición del tema con paleta de colores y tipografía personalizada
const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#f50057",
    },
  },
  typography: {
    // Se define la familia tipográfica por defecto
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

export default theme;
