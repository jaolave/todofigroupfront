# Fi Group ToDo Front End

Este proyecto es una aplicación de lista de tareas desarrollada en React.js, TypeScript y Ant Desing para Fi Group cómo prueba técnica.

## Instalación

1. Clona el repositorio en tu máquina local.

`git clone URL repositorio`

2. Navega al directorio del proyecto.

`cd todofigroupfront`

3. Instala las dependencias del proyecto.

`npm install`

## Archivo .env

1. Crea un archivo .env en la raiz del proyecto

2. Agrega el siguiente texto al mismo:

`REACT_APP_WEBSITE_NAME=Fi Group ToDo`
`REACT_APP_API_BASE_URL=https://localhost:7209`

3. Configura el end point del backend API editando el valor de REACT_APP_API_BASE_URL por la URL del API.

## Ejecución del proyecto

Para iniciar la aplicación en modo desarrollo, ejecuta el comando:

`npm start`

Abre [http://localhost:3000](http://localhost:3000) para ver la aplicación en el navegador.

## Ejecución de pruebas

Para ejecutar las pruebas del proyecto, usa el siguiente comando:

`npm test`

Este comando iniciará el entorno de pruebas de Jest y ejecutará todas las pruebas disponibles en la carpeta `src`.

## Construcción del proyecto para producción

Para construir el proyecto en modo producción, ejecuta el siguiente comando:

`npm run build`

Esto creará una carpeta `build` que contendrá los archivos optimizados para producción.