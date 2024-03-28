FROM node:20-alpine

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

RUN npm install --global pm2

COPY --chown=node:node ./../../package*.json ./

COPY --chown=node:node ./../../ ./

USER node

RUN npm install --omit=dev

RUN npm run build

EXPOSE 3000

CMD [ "pm2-runtime", "npm", "--", "start" ]
