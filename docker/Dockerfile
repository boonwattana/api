FROM node:16.14.0-alpine3.15

WORKDIR /usr/src/app

RUN apk update && \
    apk add --no-cache vim tzdata bash curl && \
    rm -rf /var/cache/apt/*

# ENV TZ=Asia/Bangkok
# RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

ENV TZ=Asia/Bangkok
# ENV NODE_ENV=development

COPY ./package*.json /usr/src/app/
COPY ./node_modules /usr/src/app/node_modules
COPY ./dist /usr/src/app/dist

# COPY ./public /usr/src/app/public
# COPY ./uploads /usr/src/app/uploads


CMD ["node", "/usr/src/app/dist/main.js"]