const fs = require("fs");
let datos = [];
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
      else resolve(`EL archivo resultados/${data.codigo_pais}-${anio}.txt se a Guardado Satisfactoriamente!`);
    });
  });
};
module.exports = {
  crearArchivo,
};
