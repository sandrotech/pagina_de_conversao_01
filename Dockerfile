FROM node:20-alpine AS builder

WORKDIR /app

# Copia apenas os manifests para otimizar cache
COPY package*.json ./

# Instala dependências ignorando conflitos de peer deps
RUN npm install --legacy-peer-deps

# Copia todo o restante do projeto
COPY . .

# Build da aplicação
RUN npm run build

# --- Etapa de produção ---
FROM node:20-alpine AS runner

WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY package*.json ./

RUN npm install --production --legacy-peer-deps

CMD ["node", "dist/server.js"]
