let comandos = {
  archivo: {
    demand: true,
    alias: "f",
    desc: "Permite establecer el path del archivo CSV que contiene los datos a analizar",
  },
  pais: {
    default: "ECU",
    demand: true,
    alias: "c",
    desc: " Permite determinar el país a analizar a través de su código",
  },
  anio: {
    default: 1960,
    alias: "y",
    desc: "Permite especificar el año para el cual se requiere las estadísticas",
  },
};

const argv = require("yargs")
.command("publicar", "Este comando publicará las estadísticas en una página web", comandos)
.command("guardar", "Este comando almacenará los resultados de las estadísticas en un archivo json", comandos)
.help().argv;

module.exports = {
  argv,
};
