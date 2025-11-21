# Etapa 1: Build da aplicação
FROM node:18-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Vite e esbuild às vezes ficam sem permissão no Alpine
RUN chmod -R +x node_modules/.bin

# Build - seu Vite gera /build (como confirmado no log)
RUN npm run build

# Etapa 2: Servir com Nginx
FROM nginx:stable-alpine

# Copia a pasta build gerada pelo Vite
COPY --from=build /app/build /usr/share/nginx/html

# SPA fallback
RUN sed -i 's/try_files $uri $uri\/ =404;/try_files $uri \/index.html;/' /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
