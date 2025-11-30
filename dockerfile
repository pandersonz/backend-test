
FROM node:22-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --production

COPY . .

EXPOSE 8930

# Comando de arranque
CMD ["node", "index.js"]