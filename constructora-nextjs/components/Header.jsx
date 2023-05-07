import Link from "next/link";
import iconoEmpresa from "../public/img/model-home.png";
import Image from "next/image";
import { useContext } from "react";
import AuthContext from "../context/authContext";

const Header = () => {
  // const { currentUser, logout } = useContext(AuthContext);

  // const handleLogout = async () => {
  //   try {
  //     await logout();
  //   } catch (error) {
  //     console.log("Error al cerrar sesión", error);
  //   }
  // };

  return (
    <header className="header">
      <Image
        width={600}
        height={363}
        src={iconoEmpresa}
        alt="icono empresa"
        className="img-header"
      />

      <nav className="nav">
        <ul>
          <li>
            <Link href="/">Inicio</Link>
          </li>
          <li>
            <Link href="/contacto">Contacto</Link>
          </li>
          <li>
            <Link href="/registro">Registro</Link>
          </li>

          <li>
            {/* {currentUser ? (
              <button onClick={handleLogout}>Cerrar sesión</button>
            ) : (
              <Link href="/login">Iniciar sesión</Link>
            )} */}
            <Link href="/login">Iniciar sesión</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
