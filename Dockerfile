FROM node:alpine

USER node

RUN mkdir /home/node/app
WORKDIR /home/node/app
COPY . /home/node/app
RUN npm install --unsafe-perm && npm install pm2 -g && pm2 install pm2-logrotate && pm2 set pm2-logrotate:max_size 200M && pm2 set pm2-logrotate:retain 999 && pm2 set pm2-logrotate:dateFormat "YYYY-MM-DD_HH-mm-ss"  && pm2 set pm2-logrotate:workerInterval 1800

# CMD [ "npm", "start" ]
CMD pm2-runtime index.js -i max -n  --output "/usr/src/app/logs/access.log" --error "/usr/src/app/logs/error.log"
EXPOSE 3000

# docker run -d --name servre  -p 3000:3000 --restart unless-stopped  -e ENV="production"-e DB_USER=psotgres -e DB_PW=postgres123 -e DB_NAME=postgres -e PORT=3000 <image>
