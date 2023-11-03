FROM node:19-alpine3.15

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install -g npm@9.8.0

RUN npm install --force

COPY . .

EXPOSE 3000



# RUN npm run start
CMD [ "npm" ,"run", "start" ]