# Dockerfile for React client

# Build react client
FROM node:20.12.2

# Working directory be app
WORKDIR /usr/src/app

COPY package*.json ./

###  Installing dependencies

RUN npm install --silent

# copy local files to app folder
COPY . .

EXPOSE 5173

CMD [ "npm", "run", "dev", "--", "--host", "0.0.0.0"]