# ======== Etapa base: Instala dependencias NX compartidas ========
FROM node:18-alpine AS base
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install

# ======== Backend: Construcción y ejecución ========
FROM base AS backend
WORKDIR /app
COPY . .
WORKDIR /app/apps/backend
EXPOSE 3000
CMD ["npm", "run", "start:backend"]

# ======== Frontend: Construcción y ejecución ========
FROM base AS frontend
WORKDIR /app
COPY . .
WORKDIR /app/apps/frontend
EXPOSE 4200
CMD ["npm", "run", "start:frontend"]
