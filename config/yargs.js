let comandos = {
  archivo: {
    demand: true,
    alias: "f",
    desc: "Archivo CSV con datos al procesar",
  },
  anio: {
    default: 1960,
    alias: "y",
    desc: "Año que del que se busca información",
  },
  pais: {
    default: "ECU",
    demand: true,
    alias: "c",
    desc: " Permite determinar el país a analizar a través de su código",
  },
};

const argv = require("yargs").command("publicar", "Este comando publicará las estadísticas en una página web", comandos).command("guardar", "Este comando almacenará los resultados de las estadísticas en un archivo json", comandos).help().argv;

module.exports = {
  argv,
};
