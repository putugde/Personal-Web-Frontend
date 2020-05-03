FROM node:10.16-alpine

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

RUN apk --no-cache --virtual build-dependencies add \
    python \
    make \
    g++ \
    && npm install --only=production \
    && apk del build-dependencies

# timezone set to JKT / BKK GMT +7
RUN apk add tzdata && cp /usr/share/zoneinfo/Asia/Jakarta /etc/localtime && echo "Asia/Jakarta" >  /etc/timezone

COPY . .

COPY --chown=node:node . .

USER node

EXPOSE 3000

CMD ["npm", "start"]
