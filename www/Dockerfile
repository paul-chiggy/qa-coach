FROM node:alpine AS builder
WORKDIR '/app'
COPY package.json .
RUN yarn install
COPY . .
RUN yarn run build

FROM nginx
EXPOSE 80
COPY --from=builder /app/dist /usr/share/nginx/html