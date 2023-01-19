FROM node:18.13-alpine

WORKDIR /usr/biller/biller-api

ENV PORT ${PORT}
ENV NODE_ENV ${NODE_ENV}

COPY package.json .
COPY yarn.lock .

RUN ["yarn"]

RUN ["yarn", "add", "-D", "@swc/cli", "@swc/core"]

COPY . .

RUN ["yarn", "build"]

EXPOSE ${PORT}

CMD ["yarn", "start"]
