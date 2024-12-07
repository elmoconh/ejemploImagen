# Ejemplo Imagen con Docker

Este proyecto es un ejemplo de cómo crear y ejecutar una aplicación full-stack utilizando Docker y Docker Compose.

## Requisitos

- Docker y Docker Compose instalados en tu máquina. Puedes descargarlos desde [aquí](https://www.docker.com/products/docker-desktop).

## Pasos para ejecutar el proyecto

1. Clona este repositorio en tu máquina local:
    ```sh
    git clone <URL_DEL_REPOSITORIO>
    cd ejemploImagen
    ```

2. Construye y levanta los servicios con Docker Compose:
    ```sh
    docker-compose up --build
    ```

3. Abre tu navegador web y navega a `http://localhost:3001` para ver la aplicación frontend en funcionamiento.

4. Para acceder a la base de datos MySQL, puedes usar Adminer navegando a `http://localhost:8080`.

## Estructura del proyecto

- `frontend/`: Directorio con el código fuente de la aplicación frontend.
  - `Dockerfile`: Contiene las instrucciones para construir la imagen Docker del frontend.
  - `src/App.js`: Código principal de la aplicación React.
- `backend/`: Directorio con el código fuente de la aplicación backend.
  - `Dockerfile`: Contiene las instrucciones para construir la imagen Docker del backend.
  - `server.js`: Código principal del servidor Express.
- `docker-compose.yml`: Archivo de configuración para Docker Compose.
- `db/init.sql`: Script SQL para inicializar la base de datos.

## Notas

- Asegúrate de que los puertos `3001`, `5001`, `3307` y `8080` no estén siendo utilizados por otras aplicaciones en tu máquina.
- Puedes detener los contenedores ejecutando:
    ```sh
    docker-compose down
    ```

## Contribuciones

Si deseas contribuir a este proyecto, por favor abre un issue o envía un pull request.

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo `LICENSE` para más detalles.