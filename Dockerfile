# Base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy files and install dependencies
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Copy everything else
COPY . .

# Expose port & start the app
EXPOSE 3000
CMD ["yarn", "dev"]