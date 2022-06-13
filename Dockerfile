FROM node:16

WORKDIR /usr/react-vite-boilerplate

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

COPY ["package.json", "package-lock.json", "./"]
RUN npm install

ADD . .

ENTRYPOINT ["/entrypoint.sh"]

CMD ["npm", "run", "dev"]