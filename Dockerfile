# Use a lightweight Node.js image based on Alpine Linux
FROM node:20-alpine

# Create the application directory and set the correct ownership
RUN mkdir -p /home/node/app && chown -R node:node /home/node/app

# Set the working directory
WORKDIR /home/node/app

# Install PM2 globally for process management
RUN npm install --global pm2

# Copy package.json and package-lock.json into the working directory
COPY --chown=node:node package*.json ./

# Install dependencies, excluding devDependencies
RUN npm install --omit=dev

# Copy all application files into the working directory
COPY --chown=node:node . .

# Set the user to 'node' for the subsequent commands
USER node

# Build the application for production
RUN npm run build

# Expose port 3000 to make the application accessible
EXPOSE 3000

# Use PM2 to start the application in production mode
CMD ["pm2-runtime", "npm", "--", "start"]
