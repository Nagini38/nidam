FROM nginx:alpine
COPY index.html galerie.html contact.html /usr/share/nginx/html/
EXPOSE 80
