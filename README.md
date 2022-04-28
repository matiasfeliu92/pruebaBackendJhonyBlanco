# App cotizador de viviendas
aplicacion para cotizar viviendas, en funcion del tipo, superficie, el precio y la ubicacion

# Instalacion
* 1 Clonar este proyecto
* 2 En la carpeta raiz "pruebaBackendJhonyBlanco", dentro de "server", ejecutar el comando "npm install" para instalar las dependencias de Node Js
* 3 Ingresar a la carpeta client con el comando "cd client" y ejecutar el comando "npm install" para instalar las dependencias de React js

# Para iniciar la App
* 1 Dentro de la carpeta pruebaBackendJhonyBlanco/server ejecutar el comando "npm run dev" para iniciar el servidor con Express
* 2 Salir de la carpeta server e ingresar a pruebaBackendJhonyBlanco/client, ejecutar el comando "npm start" para iniciar la interfaz grafica con React

# Armado de la base de datos
* las consultas a la tabla "viviendas" de la base de datos "cotizador de viviendas", se realizan a traves del modelo "vivienda", desarrollado con Sequelize. El cual contiene los campos tipo, superficie, precio, ubicacion e imagen de la vivienda

# Navegacion dentro de la App
* En la ruta raiz "http://localhost:4000/viviendas" se encuentra la lista de todas las viviendas disponibles, con su tipo, ubicacion, superficie, precio y una foto
* En la ruta "http://localhost:4000/viviendas/crear" se puede ingresar una nueva vivienda a traves del formulario
* En la ruta "http://localhost:4000/viviendas/actualizar/id" se pueden actualizar los datos de cada vivienda
* En la ruta "http://localhost:4000/viviendas/eliminar/id" se puede eliminar una vivienda si se desea

# Tecnologias utilizadas
* Para el Backend se uso: Node Js, Express con Sequelize y MySql para la base de datos
* Para el Frontend se uso: React Js con axios para capturar la informacion desde el Backend y algunos hooks como useState, useEffect y useNavigate
