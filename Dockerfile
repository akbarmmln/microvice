FROM node:10.15-alpine

RUN mkdir -p /home/node/app/node_modules
#&& chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

RUN apk update && apk upgrade && \
    echo @3.10 http://nl.alpinelinux.org/alpine/v3.10/community >> /etc/apk/repositories && \
    echo @3.10 http://nl.alpinelinux.org/alpine/v3.10/main >> /etc/apk/repositories && \
    apk add --no-cache \
      chromium@3.10=77.0.3865.120-r0 \
      nss@3.10 \
      freetype@3.10 \
      freetype-dev@3.10 \
      harfbuzz@3.10 \
      ca-certificates \
      ttf-freefont@3.10 \
      nodejs \
      yarn

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser
    
RUN yarn add puppeteer@1.19.0

# Add phantomjs
RUN wget -qO- "https://github.com/dustinblackman/phantomized/releases/download/2.1.1a/dockerized-phantomjs.tar.gz" | tar xz -C / \
    && npm config set user 0 \
    && npm install -g phantomjs-prebuilt
    
# Add fonts required by phantomjs to render html correctly
RUN apk add --update ttf-dejavu ttf-droid ttf-freefont ttf-liberation ttf-ubuntu-font-family && rm -rf /var/cache/apk/*

# If you are building your code for production
# RUN npm install --only=production
RUN npm install
RUN apk add tzdata && cp /usr/share/zoneinfo/Asia/Jakarta /etc/localtime && echo "Asia/Jakarta" >  /etc/timezone

COPY . .

#COPY --chown=node:node . .

USER root

EXPOSE 8099

CMD ["npm", "start"]
