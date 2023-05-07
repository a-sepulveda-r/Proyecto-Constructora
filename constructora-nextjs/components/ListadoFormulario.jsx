import { useEffect, useState } from "react";

export default function FormularioListado({ formularios, setFormularios }) {
  const cargarDatos = async () => {
    try {
      const baseUrl = "http://localhost:3000";
      const url = baseUrl + "/formulario";
      const respuesta = await fetch(url);

      if (!respuesta.ok)
        throw new Error("Problemas al recuperar las categorías!");

      const cats = await respuesta.json();
      setFormularios(cats); // LO MÁS IMPORTANTE !!!!
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    cargarDatos();
  }, []);

  const eliminar = async (formulario) => {
    try {
      //const baseUrl   = Configuracion.getBaseUrl();
      const baseUrl = "http://localhost:3000";
      const url = baseUrl + "/formulario?id=" + formulario.id;
      //const url       = baseUrl + '/formulario/'+formulario.id;

      const respuesta = await fetch(url, {
        method: "DELETE",
      });
      if (!respuesta.ok) throw new Error("No se pudo borrar la categoría!!!");
      const resultado = await respuesta.json();
      console.log("Categoría borrada de manera exitosa");

      // actualizar el listado
      cargarDatos();
    } catch (error) {
      console.error({ error: error.message });
    }
  };

  return (
    <section>
      <h2>Listado de Solicitudes</h2>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Telefono</th>
              <th>Email</th>
              <th>Dirección</th>
              <th>Región</th>
              <th>Comuna</th>
              <th>Asunto</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {formularios.map((formulario) => (
              <tr key={formulario.id}>
                <td>{formulario.nombre}</td>
                <td>{formulario.telefono}</td>
                <td>{formulario.email}</td>
                <td>{formulario.direccion}</td>
                <td>{formulario.region}</td>
                <td>{formulario.comuna}</td>
                <td>{formulario.asunto}</td>
                <td>
                  <button className="boton bg-warning">Editar</button>
                  <button
                    className="boton bg-del"
                    onClick={() => eliminar(formulario)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
