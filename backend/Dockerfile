# Usa una imagen de Node.js
FROM node:20

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos del backend
COPY package*.json ./
RUN npm install

COPY . .

# Expone el puerto de la API
EXPOSE 5000

# Comando para iniciar el servidor
ENTRYPOINT ["node", "server.js"]
