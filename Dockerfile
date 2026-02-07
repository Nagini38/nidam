FROM nginx:alpine
COPY index-luxe.html galerie-luxe.html contact-luxe.html admin.html site-content.js /usr/share/nginx/html/
EXPOSE 80
