FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install



#Stage 2
FROM nginx:alpine
COPY . /usr/share/nginx/html