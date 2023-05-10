## Create a Vite Docker Container

# Use an official Node runtime as a parent image
FROM node:16-alpine

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the production version of the application
RUN npm run build

# Expose the port that the application listens on
EXPOSE ${CLIENT_PORT}

# Start the application
CMD ["npm", "run", "dev"]


