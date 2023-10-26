FROM node:18.16.1-alpine3.18 As build
WORKDIR /app
COPY package.json ./
RUN yarn install
