FROM node:20-alpine

ARG USER_ID
ARG GROUP_ID

RUN RUN deluser node || true
RUN delgroup node || true
RUN addgroup -g ${GROUP_ID} node
RUN adduser -u ${USER_ID} -G node -h /home/node -s /bin/sh -D node

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

RUN npm install --global pm2

COPY --chown=node:node ./../package*.json ./

COPY --chown=node:node ./../ ./

USER node

RUN npm install --omit=dev

RUN npm run build

EXPOSE 3000

CMD [ "pm2-runtime", "npm", "--", "start" ]
