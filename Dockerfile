FROM node:6.11.1-alpine
EXPOSE 8080
WORKDIR /usr/src/app
CMD ["yarn", "run", "start"]
