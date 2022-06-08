#FROM nginx:1.15-alpine
#COPY nginx.conf /etc/nginx
#COPY dist /usr/share/nginx/html
#COPY script-clean-retc.sh /usr/bin
#RUN chmod 777 /usr/bin/script-clean-retc.sh
#RUN apk add --no-cache nginx-mod-http-lua tzdata
#ENV TZ=Europe/Moscow
#RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
#RUN mkdir /var/cache/nginx/retc 

#EXPOSE 80
#CMD ["nginx", "-g", "daemon off;"]
FROM node:17
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
CMD [ "npm", "run", "serve" ]

