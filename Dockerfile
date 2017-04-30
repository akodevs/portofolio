############################################################
# Dockerfile to build MEAN Staack
# Create the based image node
############################################################

FROM node:latest

# File Author / Maintainer
MAINTAINER Kurt Garcia


################## INSTALL LIBRARIES ######################
RUN apt-get update
ENV NODE_ENV=production 
RUN npm install pm2 -g
##################### LIBRARIES END #####################

################## ESTABLISH DIRECTORIES ######################
RUN rm -rf /var/www/
WORKDIR /var/www/
COPY package.json /var/www/
RUN npm install 
COPY public/ /var/www/public/
COPY server/ /var/www/server/
COPY server.js /var/www/
# RUN chmod -R 755 /var/www
################## END DIRECTORIES ######################

# Expose the default port
EXPOSE 8080
VOLUME /var/www

CMD ["pm2", "start", "server.js", "--no-daemon"]