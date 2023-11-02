# Étape 1 : Construction de l'application avec toutes les dépendances
FROM node:14-alpine AS builder

# Créez un répertoire de travail dans l'image de construction
WORKDIR /app

# Copiez les fichiers package.json et package-lock.json
COPY package*.json ./

# Installation des dépendances avec npm
RUN npm install

# Copiez le reste des fichiers de l'application
COPY . .

# Construction de l'application (si nécessaire)
RUN npm run build

# Étape 2 : Image légère pour l'exécution
FROM node:14-alpine

# Créez un répertoire de travail dans l'image finale
WORKDIR /app

# Copiez uniquement les fichiers nécessaires à partir de l'étape de construction
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./

# Exécution de l'application
CMD ["npm", "start"]
