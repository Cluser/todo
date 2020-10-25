# stage 1

FROM node:latest AS nodee
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

# stage 2

FROM nginx:alpine
COPY --from=nodee /app/dist/todo /usr/share/nginx/html
EXPOSE 80