FROM nginx:alpine

LABEL maintainer="Joseph Cuffney <josephcuffney@gmail.com>"

COPY ./build /usr/share/nginx/html

ENV PUBLIC_URL localhost:8080
