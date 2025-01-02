FROM nginx:alpine

WORKDIR /usr/share/nginx/html

COPY . .

EXPOSE 80

# Ensure that nginx runs correctly
CMD ["nginx", "-g", "daemon off;"]