FROM node:20

# Set the working directory
WORKDIR /app

# Copy only the necessary files from the build stage
COPY ./package.json ./yarn.lock ./next.config.ts ./
COPY ./node_modules ./node_modules
COPY ./.next ./.next 
COPY ./public ./public
# Expose the port the app runs on
EXPOSE 3000

# Start the Next.js app
CMD ["yarn", "start"]
