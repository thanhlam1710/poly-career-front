# # Build BASE
# FROM node:16-alpine as BASE

# WORKDIR /app
# COPY package.json yarn.lock ./
# RUN apk add --no-cache git \
#     && yarn install --frozen-lockfile \
#     && yarn cache clean

# Build Image
FROM node:16-alpine AS BUILD

WORKDIR /app
COPY . .
RUN    yarn install --frozen-lockfile\
    &&  yarn build

# Build production
FROM node:16-alpine AS PRODUCTION
WORKDIR /app

COPY --from=BUILD /app/package.json /app/yarn.lock ./
COPY --from=BUILD /app/node_modules ./node_modules
COPY --from=BUILD /app/.next ./.next
COPY --from=BUILD /app/public ./public

EXPOSE 3000

CMD ["yarn", "start"]