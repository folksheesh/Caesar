# Menggunakan base image Nginx
FROM nginx:latest

# Menyalin file statis ke dalam direktori default Nginx
COPY ./html /usr/share/nginx/html

# Expose port (opsional)
EXPOSE 80
