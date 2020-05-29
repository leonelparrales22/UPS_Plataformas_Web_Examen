## Plataformas Web P56 - Examen - Primer Parcial 

Aplicación en NodeJS que permite leer los datos de las
Suscripciones a telefonía celular móvil, publicadas por el Banco
Mundial y publicar la suscripción de un determinado país en un
año específico.

## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._

### Pre-requisitos 📋

 * **Git** .- https://git-scm.com<br/><br/>
 * **Node.js** .- https://nodejs.org. Tenga en cuenta que la versión debe ser igual o superior a la versión 8.<br/><br/>
 * **Npm** .- Administrador de paquetes Node.js, viene con Node.js. Asegúrese de que la versión npm sea igual o superior a la versión 5.
<br/>
<!-- 
**Nota.-** Instalar la versión en linux 12.x
   ```
   sudo apt-get install curl
   curl -sLhttps://deb.nodesource.com/setup_12.x | sudo -E bash -
   sudo apt-get install nodejs
   ``` -->
   
 <!-- * **Windows**
 1. Instalar Visual Studio Code
    https://code.visualstudio.com/download
 2. Instalar node.js
    https://nodejs.org/es/
 3. Instalar la extensión del terminal en Visual Studio Code
    En Visual Studio Code, puede abrir una terminal integrada, inicialmente comenzando en la raíz de su espacio de trabajo. -->


### Instalación 🔧

_Cuando haya completado la configuración de herramientas, debe descargar el código de la aplicación. La forma más fácil de hacerlo es clonar el repositorio de GitHub:_

```
git clone https://github.com/leonelparrales22/UPS_Plataformas_Web_Examen.git
```

_Una vez completado la clonación, se debe instalar los módulos npm_

```
cd UPS_Plataformas_Web_Examen && npm install --save
```

## Ejecutando las pruebas ⚙️

Descargar la data de la siguiente dirección web: [Suscripciones a telefonía celular móvil](http://api.worldbank.org/v2/es/indicator/IT.CEL.SETS?downloadformat=csv)


### Comandos:

1. **--archivo -f.-** Permite establecer el path del archivo CSV que contiene los datos a analizar


```
"db/datos.csv" 
```

2. **--pais -c.-** Permite determinar el país a analizar a través de su código [ISO 3166 ALPHA-3](https://laendercode.net/es/3-letter-list.html). El valor por defecto es “ECU".

```
"ECU" 
```
3. **--anio -y.-** Permite especificar el año para el cual se requiere las estadísticas. Desde 1960 hasta 2018. Por defecto, 1960.
```
1960 
```


**Ejemplos:**
```
node app.js publicar -f="db/datos.csv" -c="ECU" -y=1960
```
```
node app.js guardar -f="db/datos.csv" -c="ECU" -y=1960
```

**NOTA:** Los resultados del comando guardar se guardarán en la carpeta /resultados que se creará automáticamente en la raíz del proyecto.



## Construido con 🛠️

Las herramientas utilizadas en el proyecto:

**Editor de código** 

* [Visual Studio code](https://code.visualstudio.com/) - Editor de código fuente

**Dependencias del proyecto** 
* [colors](https://www.npmjs.com/package/colors) - colores a la ejecucion de la terminal
* [yargs](https://www.npmjs.com/package/yargs) - Yargs te ayuda a crear herramientas interactivas de línea de comandos, analizando argumentos y generando una elegante interfaz de usuario.
* [neat-csv](https://www.npmjs.com/package/neat-csv) - Usado para la lectura de archivos CSV.

## Versionado 📌

Para todas las versiones disponibles, mira los [tags en este repositorio](https://github.com/leonelparrales22/UPS_Plataformas_Web_Examen/releases).

## Autores ✒️

* **Parrales Leonel** - [leonelparrales22](https://github.com/leonelparrales22)

También puedes mirar la lista de todos los [contribuyentes](https://github.com/karlaVane/Proyecto-VII-Node.JS/graphs/contributors) quíenes han participado en este proyecto. 

## Licencia 📄

Este proyecto está bajo la Licencia (MIT License) - mira el archivo [LICENSE.md](LICENSE.md) para detalles

⌨️ con ❤️ por [Parrales Leonel](https://github.com/leonelparrales22) 😊
