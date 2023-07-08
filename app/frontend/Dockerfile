# Official Node.js image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install -g serve

# Copy the built static files into the Docker image
COPY build/ .

# Serve the app using a lightweight node server
CMD [ "npm", "run", "serve" ]