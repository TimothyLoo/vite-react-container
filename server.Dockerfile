## Create an Express Server Container
# Use an official Node runtime as a parent image
FROM node:16-alpine

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application code to the container
# COPY . .
COPY server.ts server.ts
COPY tsconfig.json tsconfig.json
COPY tsconfig.node.json tsconfig.node.json

# Build the production version of the application
# RUN npm run build

# Expose the port that the server listens on
EXPOSE 3001

# Start the application
CMD ["npm", "run", "server"]