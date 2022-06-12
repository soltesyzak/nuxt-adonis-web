FROM node:lts-alpine

WORKDIR /app
COPY package.json /app
RUN npm i -g @adonisjs/cli && npm install

COPY . .
# RUN node ace migration:run

EXPOSE 3333

CMD ["node", "ace", "serve", "--watch"]