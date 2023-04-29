FROM node:18-alpine as build

COPY . /app

WORKDIR /app

RUN npm i
RUN npm run build
RUN mkdir /app_built
RUN cp -r /app/.output/* /app_built
RUN rm -r /app

WORKDIR /app_built

CMD node server/index.mjs
