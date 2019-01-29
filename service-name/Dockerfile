FROM mhart/alpine-node

RUN addgroup -S soup && adduser -S -g soup soup

ENV HOME=/home/nupp

COPY src/ $HOME/app/src

COPY server/ $HOME/app/server

COPY package.json  $HOME

ADD https://github.com/Yelp/dumb-init/releases/download/v1.1.1/dumb-init_1.1.1_amd64 /usr/local/bin/dumb-init

WORKDIR $HOME/app

RUN chown -R soup:soup $HOME/* /usr/local/ && \
    chmod +x /usr/local/bin/dumb-init && \
    npm install && \
    chown -R soup:soup $HOME/*

USER soup

EXPOSE 3000

CMD ["dumb-init", "npm", "start"]