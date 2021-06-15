FROM node:14-alpine as base
COPY . /nodeApp
WORKDIR /nodeApp
EXPOSE 5000
ENV NODE_ENV=development
RUN npm install
CMD [ "node", "server.js" ]
