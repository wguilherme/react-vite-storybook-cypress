FROM node:16

RUN apt-get update && \
  apt-get install --no-install-recommends -y \
  # install cypress system dependencies
   libgtk-3-0 \
   libgbm-dev \
   libnotify-dev \
   libgconf-2-4 \
   libnss3 \
   libxss1 \
   libasound2 \
   libxtst6 \
   xauth \
   xvfb \
  # clean up
  && rm -rf /var/lib/apt/lists/*

WORKDIR /usr/react-vite-boilerplate

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

COPY ["package.json", "package-lock.json", "./"]
RUN npm ci

ADD . .

ENTRYPOINT ["/entrypoint.sh"]

CMD ["npm", "run", "dev"]