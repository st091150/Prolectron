FROM node:latest as client 

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY ./package*.json /app

RUN npm install --silent

RUN npm install react-scripts -g --silent

EXPOSE 8080

COPY . .

CMD ["npm", "start"]
