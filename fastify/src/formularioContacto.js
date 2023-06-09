const { admin } = require("./firebase");

module.exports = async (req, res) => {
  switch (req.method) {
    case "GET":
      return procesarGET(req, res);
    case "POST":
      return procesarPOST(req, res);
    case "PUT":
      return procesarPUT(req, res);
    case "DELETE":
      return procesarDELETE(req, res);
    default:
      res.code(500).send({ error: "Método HTTP no soportado!" });
  }
};

function getColeccion() {
  return admin.firestore().collection("formulario");
}

async function procesarPOST(req, res) {
  try {
    const { nombre, email, telefono, region, comuna, direccion, asunto } =
      req.body;
    const formulario = {
      nombre,
      email,
      telefono,
      region,
      comuna,
      direccion,
      asunto,
    };
    const documento = await getColeccion().doc(); // crea documento vacío
    const id = documento.id;
    documento.set(formulario);
    formulario.id = id;
    return formulario;
  } catch (error) {
    res.code(500).send({ error: error.message });
  }
}

async function procesarGET(req, res) {
  try {
    const querySnapshot = await getColeccion().get();
    const documentos = querySnapshot.docs.map((d) => {
      /*
            return {
                id: d.id,
                ...d.data()
            }
            */
      return d.data();
    });
    return documentos;
  } catch (error) {
    res.code(500).send({ error: error.message });
  }
}

async function procesarPUT(req, res) {
  try {
    const { nombre, email, telefono, region, comuna, direccion, asunto } =
      req.body;
    const formulario = {
      nombre,
      email,
      telefono,
      region,
      comuna,
      direccion,
      asunto,
    };
    const documento = await getColeccion().doc(id); // crea documento vacío
    documento.update(formulario);
    return formulario;
  } catch (error) {
    res.code(500).send({ error: error.message });
  }
}
async function procesarDELETE(req, res) {
  try {
    const id = req.query.id; // http://localhost:3000/formulario?id=XXXXXX
    const docRef = await getColeccion().doc(id);
    await docRef.delete();
    return { borrado: true };
  } catch (error) {
    return { borrado: false, mensaje: error.message };
  }
}
