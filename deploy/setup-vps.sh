#!/bin/bash
set -euo pipefail

DOMAIN="asesoriaplasticayestetica.com"
CHAT_DOMAIN="chat.asesoriaplasticayestetica.com"
APP_DIR="/var/www/asesoria"
CHATWOOT_DIR="/opt/chatwoot"

echo "=== 1/8 Actualizar sistema ==="
export DEBIAN_FRONTEND=noninteractive
apt update && apt upgrade -y

echo "=== 2/8 Instalar paquetes base ==="
apt install -y curl git nginx certbot python3-certbot-nginx ufw rsync

echo "=== 3/8 Instalar Node.js 20 LTS ==="
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt install -y nodejs

echo "=== 4/8 Instalar Docker ==="
curl -fsSL https://get.docker.com | sh
apt install -y docker-compose-plugin
systemctl enable docker
systemctl start docker

echo "=== 5/8 Configurar firewall ==="
ufw allow OpenSSH
ufw allow 'Nginx Full'
ufw --force enable

echo "=== 6/8 Configurar Nginx - sitio React ==="
mkdir -p $APP_DIR

cat > /etc/nginx/sites-available/$DOMAIN << 'NGINX'
server {
    listen 80;
    server_name asesoriaplasticayestetica.com www.asesoriaplasticayestetica.com;

    root /var/www/asesoria/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    location ~* \.html$ {
        expires -1;
        add_header Cache-Control "no-cache";
    }

    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript image/svg+xml;
    gzip_min_length 256;
}
NGINX

echo "=== 7/8 Configurar Nginx - Chatwoot ==="
cat > /etc/nginx/sites-available/$CHAT_DOMAIN << 'NGINX'
server {
    listen 80;
    server_name chat.asesoriaplasticayestetica.com;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
NGINX

ln -sf /etc/nginx/sites-available/$DOMAIN /etc/nginx/sites-enabled/
ln -sf /etc/nginx/sites-available/$CHAT_DOMAIN /etc/nginx/sites-enabled/
rm -f /etc/nginx/sites-enabled/default
nginx -t && systemctl reload nginx

echo "=== 8/8 Preparar Chatwoot ==="
mkdir -p $CHATWOOT_DIR

echo "=== SETUP COMPLETADO ==="
echo "Nginx escuchando en puerto 80"
echo "Siguiente: subir archivos del sitio y obtener SSL"
