FROM node:14-alpine3.16

EXPOSE 3000

RUN mkdir -p /home/node/app

WORKDIR /home/node/app

COPY --chown=node:node package.json .
RUN npm install --force

COPY --chown=node:node . .
USER node

CMD [ "npm", "run", "start" ]
