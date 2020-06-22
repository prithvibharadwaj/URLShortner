FROM node:latest
RUN mkdir -p /usr/src/urlShortner
WORKDIR /usr/src/urlShortner
COPY package.json /usr/src/urlShortner
RUN npm install
COPY . /usr/src/urlShortner
EXPOSE 5000
CMD ["npm", "start"]