FROM node:12.17

RUN apt update && apt install -y nano

COPY src /opt/app

CMD ["node","/opt/app/index.js"]