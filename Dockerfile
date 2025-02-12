FROM node:lts-alpine AS builder
WORKDIR /app

COPY ./front-end/package.json ./front-end/package-lock.json ./
RUN npm install

COPY ./front-end/public ./public
COPY ./front-end/src ./src

RUN npm run build

FROM node:lts-alpine
WORKDIR /app

COPY ./back-end/package.json ./back-end/package-lock.json ./
RUN npm install

COPY ./back-end/database/database.js ./database/database.js
COPY ./back-end/routes/ ./routes/
COPY ./back-end/.env ./.env
COPY ./back-end/index.js ./index.js

COPY --from=builder /app/build ./build

CMD ["node", "index.js"]
EXPOSE 4000
