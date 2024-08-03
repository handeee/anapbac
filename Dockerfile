# frontend/Dockerfile

# Base image
FROM node:v20.15.1 as build

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json /app/
COPY package-lock.json ./

RUN npm install

# Copy project
COPY . /app/

# Build the project
RUN npm run build

FROM nginx:alpine

# Serve the project
RUN npm install -g server

EXPOSE 80

CMD ["npm", "start" ]