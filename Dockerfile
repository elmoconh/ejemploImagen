# Dockerfile
FROM node:18

# Directorio de trabajo dentro del contenedor
WORKDIR /app

# Exponer los puertos típicos de Node.js
EXPOSE 3000 5000
CMD ["/bin/bash"]