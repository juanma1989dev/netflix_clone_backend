FROM node:carbon

RUN mkdir -p /app

RUN npm install -g nodemon

COPY package*.json ./
RUN  npm install
COPY . .
EXPOSE 4000
CMD ["npm", "run", "start"]

