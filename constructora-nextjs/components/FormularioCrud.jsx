import { useState } from "react";
import FormularioContacto from "./FormularioContacto";
import FormularioListado from "./ListadoFormulario";

const FormularioCrud = (props) => {
  const [formularios, setFormularios] = useState([]);

  return (
    <>
      <FormularioContacto
        formularios={formularios}
        setFormularios={setFormularios}
      />
      <hr />
      <FormularioListado
        formularios={formularios}
        setFormularios={setFormularios}
      />
    </>
  );
};

export default FormularioCrud;
