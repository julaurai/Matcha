FROM node:8
RUN npm install -g nodemon
COPY package.json ./home/node
RUN cd /home/node
RUN npm install
WORKDIR /home/node
