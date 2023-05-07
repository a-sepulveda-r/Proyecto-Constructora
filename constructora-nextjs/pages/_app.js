import "@/styles/normalize.css";
import "@/styles/globals.css";
import { AuthProvider } from "@/context/authContext";
// import "@/styles/styleContacto.module.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
