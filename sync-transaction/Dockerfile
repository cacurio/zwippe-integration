FROM node:20-slim


WORKDIR /usr/src/app

COPY --chown=node:node package*.json ./
COPY --chown=node:node pnpm-lock.yaml ./

RUN apt-get update -y && apt-get install -y openssl

RUN npm install -g pnpm && pnpm install

COPY --chown=node:node . .

RUN pnpm run build

CMD [ "node", "dist/main"]