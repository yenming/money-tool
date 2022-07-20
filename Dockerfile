FROM node:lts-alpine3.16
WORKDIR /work
COPY . /work
RUN npm install
EXPOSE 3000
CMD ["npm", "run", "start"]