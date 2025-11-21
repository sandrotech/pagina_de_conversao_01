# Etapa 1: Build da aplicação
FROM node:18-alpine AS build
WORKDIR /app

# Instala dependências
COPY package*.json ./
RUN npm install

# Copia o projeto
COPY . .

# Build
RUN npm run build

# Etapa 2: Servir com Nginx
FROM nginx:stable-alpine

# Copia build correto (dist)
COPY --from=build /app/dist /usr/share/nginx/html

# Garante que o Nginx servirá SPA (react-router, etc)
RUN sed -i 's/try_files $uri $uri\/ =404;/try_files $uri \/index.html;/' /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
