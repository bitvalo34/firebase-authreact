// Este archivo se encarga de inicializar Firebase y exportar las funciones de autenticación necesarias.
// Importamos la función initializeApp para inicializar Firebase en nuestra aplicación.
import { initializeApp } from "firebase/app";
// Importamos las funciones de autenticación y proveedores de Firebase.
import {
  getAuth, // Obtiene la instancia de autenticación de Firebase.
  createUserWithEmailAndPassword, // Función para crear un nuevo usuario con email y contraseña.
  signInWithEmailAndPassword, // Función para iniciar sesión con email y contraseña.
  sendPasswordResetEmail, // Función para enviar un correo de restablecimiento de contraseña.
  signOut, // Función para cerrar la sesión del usuario.
  updateProfile, // Función para actualizar el perfil del usuario.
  signInWithPopup, // Función para iniciar sesión con proveedores mediante ventana emergente.
  GoogleAuthProvider, // Proveedor de autenticación para Google.
  GithubAuthProvider, // Proveedor de autenticación para GitHub.
} from "firebase/auth";

// Objeto de configuración de Firebase.
const firebaseConfig = {
  apiKey: "AIzaSyDF5r8kJfIfhAxvkOMiUJrjjd21rkkHqWo", // Clave API única para el proyecto Firebase.
  authDomain: "fir-auth-f3a78.firebaseapp.com", // Dominio de autenticación asociado al proyecto.
  projectId: "fir-auth-f3a78", // Identificador único del proyecto.
  storageBucket: "fir-auth-f3a78.firebasestorage.app", // Bucket de almacenamiento para archivos.
  messagingSenderId: "1016181338687", // ID del remitente para Firebase Cloud Messaging.
  appId: "1:1016181338687:web:f282184054db9b4b013e8a", // ID único de la aplicación.
};

// Inicializamos la aplicación de Firebase con la configuración proporcionada.
const app = initializeApp(firebaseConfig);

// Obtenemos la instancia de autenticación utilizando la aplicación inicializada.
const auth = getAuth(app);

// Creamos instancias de los proveedores para Google y GitHub.
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

// Exportamos la instancia de autenticación y las funciones de autenticación que utilizaremos en la aplicación.
export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  updateProfile,
  signInWithPopup,
  googleProvider,
  githubProvider,
};
