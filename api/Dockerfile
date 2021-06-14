FROM node:14-alpine as base
COPY . /nodeApp
WORKDIR /nodeApp
EXPOSE 3000
ENV NODE_ENV=development
RUN npm install
CMD [ "node", "server.js" ]
