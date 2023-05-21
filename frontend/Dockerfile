# Start from a base Nginx image
FROM nginx:alpine

# Set a working directory
WORKDIR /usr/share/nginx/html

# Copy your application files to the Docker image
COPY src/ /usr/share/nginx/html/src/
# Copy your nginx configuration file to the etc/ directory
COPY nginx/default.conf /etc/nginx/conf.d/default.conf