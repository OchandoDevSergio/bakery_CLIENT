# BAKERY - API+CLIENTE
![image](https://iili.io/JI0JqAu.md.jpg)

**El presente repositorio funciona en conjunto con el repositorio 
"Bakery_API"

## Tecnologías empleadas
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff&style=flat)](https://www.typescriptlang.org/docs/) [![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=000&style=flat)](https://react.dev/learn) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000&style=flat)](https://developer.mozilla.org/en-US/docs/Web/JavaScript) [![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=fff&style=flat)](https://developer.mozilla.org/en-US/docs/Glossary/HTML5) [![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=fff&style=flat)](https://developer.mozilla.org/en-US/docs/Web/CSS)  [![NodeJS](https://img.shields.io/badge/Node.js-393?logo=nodedotjs&logoColor=fff&style=flat)](https://developer.mozilla.org/en-US/docs/Web/API/Node) [![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?logo=sequelize&logoColor=fff&style=flat)](https://sequelize.org/) [![ExpressJS](https://img.shields.io/badge/Express-000?logo=express&logoColor=fff&style=flat)](https://expressjs.com/) [![MySQL](https://img.shields.io/badge/MySQL-4479A1?logo=mysql&logoColor=fff&style=flat)](https://dev.mysql.com/doc/)[![NPM](https://img.shields.io/badge/npm-CB3837?logo=npm&logoColor=fff&style=flat)](https://docs.npmjs.com/)  [![Axios](https://img.shields.io/badge/Axios-5A29E4?logo=axios&logoColor=fff&style=flat)](https://axios-http.com/docs/intro) [![Git](https://img.shields.io/badge/Git-F05032?logo=git&logoColor=fff&style=flat)](https://developer.mozilla.org/en-US/docs/Glossary/Git)


## Indice 

- [Vistas :art:](#vistas) 

- [Modo de empleo :arrow_forward:](#modo-de-empleo)

#

### Vistas

Vista *Home*:

![home](https://iili.io/JIkjtmx.md.jpg)

La vista home es aquella desde la que se accede a la app, simplemente sirve de recepción para poder dirigirse a las otras dos vistas.

Vista *Report*:

![report](https://iili.io/JIkw2dg.md.jpg)

En la vista report encontramos un panel desde el que se recopilan los datos para enviar una petición del tipo POST a la API, con la que poder hacer nuevos reportes de producción en la base de datos.

Vista *ProductionTracker*:

![productionTracker](https://iili.io/JIkwqIR.md.jpg)

En esta última vista nos encontramos al entrar todos los datos de reportes de producción almacenados en la API, dispuestos en un componente tabla de *Material UI*. Además encontramos un subencabezado que nos permite introducir dos fechas para acotar el rango cronológico de los reportes que queremos que sean mostrados. Si tras introducir las fechas hacemos click en "aplicar filtro", se hace la llamada pertinente a la API y automáticamente se nos muestran únicamente los reportes entre estas fechas. Además si tras ello hacemos click en "eliminar filtro", se realiza de nuevo una llamada solicitando todos los reportes a la API y se muestran automáticamente en la tabla.

### Modo de empleo

Pasos para lanzar la aplicación:

1- Generar una base de datos SQL con el nombre "bakery" con la ayuda de algún administrador de bases de datos tipo MySQL Workbench. Importante tener en cuenta que los datos en el archivo config.json de la API (los datos con los que por defecto va a tratar de enlazar con esa base de datos) son:

  "development": {
    "username": "root",
    "password": "1234",
    "database": "bakery",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }

Estos datos se habrían de cambiar por los que correspondan en su administrador de bases de datos antes de proseguir con los siguientes pasos.

2- Abre el repositorio de la API con el editor de código y ejecuta los siguientes comandos por la terminal:

npm install --save-dev sequelize-cli
En caso de no tenerlo ya instalado.

sequelize-cli db:migrate

sequelize-cli db:seed:all

Adjunto link con la documentación relativa a este paso :
https://sequelize.org/docs/v6/other-topics/migrations/

3- Se ejecuta el siguiente comando para levantar el servidor de la API:

npm start

4- Se abre el repositorio del cliente con el editor de código y se ejecuta el siguiente comando en el terminal:

npm run dev

5- Se accede a través del buscador a la URL:

http://localhost:5173/

