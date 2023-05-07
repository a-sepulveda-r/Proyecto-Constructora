import { useState } from "react";

const FormularioContacto = ({ formularios, setFormularios }) => {
  //   const [formulario, setFormulario] = useState([]);
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [direccion, setDireccion] = useState("");
  const [comuna, setComuna] = useState("");
  const [region, setRegion] = useState("");
  const [asunto, setAsunto] = useState("");

  const limpiarCampos = () => {
    setNombre("");
    setEmail("");
    setTelefono("");
    setRegion("");
    setComuna("");
    setDireccion("");
    setAsunto("");
  };
  const procesarFormulario = async (eventoSubmit) => {
    try {
      eventoSubmit.preventDefault();
      const formulario = {
        nombre,
        email,
        telefono,
        region,
        comuna,
        direccion,
        asunto,
      };

      const baseUrl = "http://localhost:3000";
      const url = baseUrl + "/formulario";

      const respuesta = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formulario),
      });

      if (!respuesta.ok) throw new Error("No se pudo guardar el formulario...");

      const formularioGuardado = await respuesta.json();
      console.dir(formularioGuardado);

      // actualiza la variable de estado
      // que contiene las categoría que muestra la tabla
      setFormularios([...formularios, formularioGuardado]);
      limpiarCampos();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <section>
      <form action="form" method="post" onSubmit={procesarFormulario}>
        <fieldset>
          <legend>Datos Personales</legend>
          <div>
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={nombre}
              onChange={(event) => setNombre(event.target.value)}
            />
            {/* <span>{errors.nombre}</span> */}
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
            {/* <span>{errors.email}</span> */}
          </div>
          <div>
            <label htmlFor="telefono">Teléfono</label>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              value={telefono}
              onChange={(event) => setTelefono(event.target.value)}
            />
            {/* <span>{errors.telefono}</span> */}
          </div>
        </fieldset>
        <fieldset>
          <legend>Ubicación</legend>
          <div>
            <label htmlFor="region">Region</label>
            <input
              type="text"
              id="region"
              name="region"
              value={region}
              onChange={(event) => setRegion(event.target.value)}
            />
            {/* <span>{errors.direccion}</span> */}
          </div>
          <div>
            <label htmlFor="comuna">Comuna</label>
            <select
              name="comuna"
              id="comuna"
              value={comuna}
              onChange={(event) => setComuna(event.target.value)}
            >
              <option value="">-- Por favor escoja una opción--</option>
              <option value="santiago">Santiago</option>
              <option value="providencia">Providencia</option>
              <option value="la-florida">La Florida</option>
              <option value="las-condes">Las Condes</option>
              <option value="vitacura">Vitacura</option>
            </select>
          </div>
          {/* <div>
            <label htmlFor="comuna">Comuna</label>
            <input
              type="text"
              id="comuna"
              name="comuna"
              value={comuna}
              onChange={(event) => setComuna(event.target.value)}
            />
          </div> */}
          <div>
            <label htmlFor="direccion">Dirección</label>
            <input
              type="text"
              id="direccion"
              name="direccion"
              value={direccion}
              onChange={(event) => setDireccion(event.target.value)}
            />
            {/* <span>{errors.direccion}</span> */}
          </div>
          <div>
            <label htmlFor="asunto">Asunto</label>
            <textarea
              type="text"
              id="asunto"
              name="asunto"
              value={asunto}
              onChange={(event) => setAsunto(event.target.value)}
              placeholder="Quiero cotizar una instalación de una casa modelo 1 para Villarrica en un terreno plano de 5000 m2."
            />
            {/* <span>{errors.direccion}</span> */}
          </div>
        </fieldset>
        <div className="botones">
          <button className="boton bg-success submit" type="submit">
            Enviar
          </button>
          <button
            className="boton bg-warning reset"
            type="reset"
            onClick={limpiarCampos}
          >
            Limpiar
          </button>
        </div>
      </form>
    </section>
  );
};

export default FormularioContacto;
