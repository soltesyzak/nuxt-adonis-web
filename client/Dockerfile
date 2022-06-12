FROM node:lts-alpine

WORKDIR /app
COPY package.json /app
COPY . .
RUN npm install
RUN npm run build

EXPOSE 3000
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

CMD ["npm", "start"]