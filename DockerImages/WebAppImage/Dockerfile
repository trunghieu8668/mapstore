FROM mapstorevn/mapstore-web-base

COPY . /app-root

RUN date +"%Y-%m-%dT%H:%M:%S.%3NZ" >> /app-root/.build-datetime

WORKDIR /app-root

EXPOSE 3000

CMD ["npm", "start"]