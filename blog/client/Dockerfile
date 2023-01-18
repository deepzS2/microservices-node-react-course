FROM node:lts-alpine

ENV CI=true
ENV WDS_SOCKET_PORT=0

WORKDIR /app
COPY package.json ./
RUN yarn install
COPY ./ ./

CMD ["npm", "start"]