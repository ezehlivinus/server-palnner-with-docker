FROM node:16.9.0-alpine3.14 AS development

WORKDIR /app

COPY package.json package*.json ./

RUN npm install glob rimraf

RUN npm install --only=development

COPY . .

EXPOSE 3001:3001

RUN npm run build

FROM node:16.9.0-alpine3.14 AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /app

COPY package.json package*.json ./

RUN npm install --only=production

COPY . .

COPY --from=development /app/dist ./dist

EXPOSE 3001:3001

CMD ["node", "./dist/main"]
