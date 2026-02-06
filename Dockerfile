FROM nginx:alpine
COPY index.html contact.html galerie.html index-luxe.html galerie-luxe.html contact-luxe.html about-luxe.html /usr/share/nginx/html/
EXPOSE 80
