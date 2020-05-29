const fs = require("fs");
let crearArchivo = (data, anio) => {
  return new Promise((resolve, reject) => {
    if (!fs.existsSync("resultados")) {
      fs.mkdirSync("resultados");
    }
    plantilla = `Datos: ${data.texto}\n`;
    plantilla += `País: ${data.nombre_pais}\n`;
    plantilla += `Año: ${anio}\n`;
    if (data.suscripcion != "") {
      plantilla += `Valor: ${data.suscripcion}\n`;
    } else {
      plantilla += `Valor: 0\n`;
    }
    fs.writeFile(`resultados/${data.codigo_pais}-${anio}.txt`, plantilla, (err) => {
      if (err) reject(err);
      else resolve(`Archivo guardado exitósamente: resultados/${data.codigo_pais}-${anio}`);
    });
  });
};
module.exports = {
  crearArchivo,
};
