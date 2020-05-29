const argv = require("./config/yargs").argv;
const colors = require("colors");
const obtenerData = require("./controller/generar-data.controller").obtenerData;
const crearArchivo = require("./controller/crear-json.controller").crearArchivo;
// node app.js publicar -f="db/datos.csv" -c="ECU" -y=1997
// node app.js guardar -f="db/API_IT.CEL.SETS_DS2_es_csv_v2_1004854.csv" -c="ECU" -y=1997 -o="HolaMundo

let data;
const menu = () => {
  let comando = argv._[0];
  switch (comando) {
    case "publicar":
      console.log("---------------------------------------------------------".rainbow);
      console.log(`Datos:`.rainbow, `${data.mediaPais[3]}`.yellow);
      console.log(`País:`.rainbow, `${data.mediaPais[1]}`.green);
      console.log(`Año:`.rainbow, `${argv.anio}`.cyan);
      if (data.mediaPais[0]!="") {
        console.log(`Valor:`.rainbow, `${data.mediaPais[0]}`.bgBlack);
      } else {
        console.log(`Valor:`.rainbow, `0`.bgBlack);
      }
      console.log("----------------------FIN DEL PROGRAMA-------------------".rainbow);
      break;
    case "guardar":
      console.log("Generando Archivo...".blue);
      crearArchivo(data.paisesAdyacentes.mayores, data.mediaPais, data.paisesAdyacentes.menores, data.mediaGlobal, data.top, argv.out)
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
