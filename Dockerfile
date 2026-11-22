FROM nginx:alpine
COPY index.html /usr/share/nginx/html/
COPY asesoria.css /usr/share/nginx/html/
COPY motor-3d /usr/share/nginx/html/motor-3d
COPY assets /usr/share/nginx/html/assets
COPY deploy/nginx-docker.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
