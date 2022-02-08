FROM node:16

# Create app directory
WORKDIR /usr/src/SoSe22-Web-A1

#get the Git repository in one Layer
RUN cd /usr/src/ &&\
    git clone https://github.com/Bytecm/SoSe22-Web-A1.git &&\
    cd /usr/src/SoSe22-Web-A1

RUN npm install

EXPOSE 8080
CMD [ "npm", "start" ]