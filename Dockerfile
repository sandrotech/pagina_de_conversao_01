FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci || npm install || npm install --force
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV PORT=3000
COPY --from=builder /app/dist /app/dist
CMD ["sh", "-c", "npx serve -s dist -l ${PORT}"]