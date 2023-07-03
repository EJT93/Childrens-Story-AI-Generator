# Official Node.js image
FROM node:14

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install
RUN npm install -g serve

# Copy the rest of the frontend code
COPY . .

# Create the build directory if it doesn't exist
RUN mkdir -p build

# Set the working directory to the subdirectory "build"
WORKDIR /app/build

# Build the app
RUN npm run build

# Set the working directory back to the root directory
WORKDIR /app

# Serve the app using a lightweight node server
CMD [ "npm", "run", "serve" ]