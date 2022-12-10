FROM node:16.15.1

# Create app dir
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# Install app dependency
COPY package*.json ./

RUN npm i

# bundle app source
COPY . .

# Build project
RUN npm run build

EXPOSE 8080:4200

CMD ["npm", "start", "--", "--host", "0.0.0.0", "--poll", "500"]
