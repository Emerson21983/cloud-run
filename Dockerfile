# Utiliza una imagen base de Node.js
FROM node:18-alpine AS build

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia el package.json y el package-lock.json en el contenedor
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia todo el código fuente en el contenedor
COPY . .

# Construye la aplicación para producción
RUN npm run build

# Utiliza una imagen base de NGINX para servir la aplicación
FROM nginx:stable-alpine

# Copia los archivos de la aplicación generados en el paso anterior en el directorio /usr/share/nginx/html
COPY --from=build /app/build /usr/share/nginx/html

# Expone el puerto 80 para el tráfico HTTP
EXPOSE 80

# Inicia NGINX cuando el contenedor se ejecute
CMD ["nginx", "-g", "daemon off;"]
