# Etapa 1: Build
FROM node:18-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN chmod +x ./node_modules/.bin/vite
RUN npm run build

# Etapa 2: Servidor Nginx
FROM nginx:stable-alpine

# Copia a pasta correta (dist, não build)
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
