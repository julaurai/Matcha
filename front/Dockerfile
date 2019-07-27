FROM node:12.2.0-alpine
RUN npm install -g nodemon 
RUN mkdir app
COPY package.json ./app
RUN cd app
RUN npm install
WORKDIR /app
