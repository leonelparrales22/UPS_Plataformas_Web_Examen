const argv = require("./config/yargs").argv;
const colors = require("colors");
const obtenerData = require("./controller/generar-data.controller").obtenerData;
const crearArchivo = require("./controller/crear-json.controller").crearArchivo;
// node app.js publicar -f="db/datos.csv" -c="ECU" -y=1997
// node app.js guardar -f="db/datos.csv" -c="ECU" -y=1997

let data;
const menu = () => {
  let comando = argv._[0];
  switch (comando) {
    case "publicar":
      console.log("---------------------------------------------------------".rainbow);
      console.log(`Datos:`.rainbow, `${data.texto}`.yellow);
      console.log(`País:`.rainbow, `${data.nombre_pais}`.green);
      console.log(`Año:`.rainbow, `${argv.anio}`.cyan);
      if (data.suscripcion!="") {
        console.log(`Valor:`.rainbow, `${data.suscripcion}`.bgBlack);
      } else {
        console.log(`Valor:`.rainbow, `0`.bgBlack);
      }
      console.log("----------------------FIN DEL PROGRAMA-------------------".rainbow);
      break;
    case "guardar":
      console.log("Generando Archivo...".blue);
      crearArchivo(data, argv.anio)
        .then((mensaje) => console.log(colors.green(mensaje)))
        .catch((err) => console.log(colors.red(err)));
      break;
    default:
      console.log("Comando no existente");
      break;
  }
};

const ejecutar = async () => {
  data = await obtenerData(argv.pais, argv.anio.toString(), argv.archivo);
  menu();
  return data;
};

ejecutar()
  .then()
  .catch((err) => {
    console.log(colors.red(err));
  });
