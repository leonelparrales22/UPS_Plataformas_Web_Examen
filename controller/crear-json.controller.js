const fs = require("fs");
let datos = [];
let crearArchivo = (data, anio) => {
  return new Promise((resolve, reject) => {
    if (!fs.existsSync("resultados")) {
      fs.mkdirSync("resultados");
    }
    plantilla = `Datos: ${data.mediaPais[3]}\n`;
    plantilla += `País: ${data.mediaPais[1]}\n`;
    plantilla += `Año: ${anio}\n`;
    if (data.mediaPais[0] != "") {
      plantilla += `Valor: ${data.mediaPais[0]}\n`;
    } else {
      plantilla += `Valor: 0\n`;
    }
    fs.writeFile(`resultados/${data.mediaPais[2]}-${anio}.txt`, plantilla, (err) => {
      if (err) reject(err);
      else resolve(`EL archivo resultados/${data.mediaPais[2]}-${anio}.txt se a Guardado Satisfactoriamente!`);
    });
  });
};
module.exports = {
  crearArchivo,
};
