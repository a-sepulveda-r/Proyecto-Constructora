import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../config/firebase";

const WelcomeMessage = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const auth = getAuth(app);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // El usuario está autenticado
        setCurrentUser(user);
      } else {
        // El usuario no está autenticado
        setCurrentUser(null);
      }
    });
    // Devuelve una función de limpieza que se ejecuta al desmontar el componente
    return unsubscribe;
  }, []);

  if (currentUser) {
    return <p>Bienvenido, {currentUser.email}!</p>;
  } else {
    return <p>No has iniciado sesión</p>;
  }
};

export default WelcomeMessage;
