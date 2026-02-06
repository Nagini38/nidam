FROM nginx:alpine
COPY index.html about.html contact.html index-luxe.html about-luxe.html contact-luxe.html /usr/share/nginx/html/
EXPOSE 80
