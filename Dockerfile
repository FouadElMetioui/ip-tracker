# Step 1: Use an official Node.js image to build the React app
FROM node:18 as build

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install --silent

# Copy the rest of the application code
COPY . .

# Build the React app for production
RUN npm run build

# Step 2: Use a lightweight web server like nginx to serve the app
FROM nginx:alpine

# Copy the built React app from the previous step to the nginx server
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 to access the application
EXPOSE 80

# Start nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]
