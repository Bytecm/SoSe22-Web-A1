FROM node:16

# Create app directory
WORKDIR /usr/src/SoSe22-Web-A1

#get the Git repository in one Layer
RUN cd /usr/src/ &&\
    git clone https://github.com/Bytecm/SoSe22-Web-A1.git &&\
    cd /usr/src/SoSe22-Web-A1

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install

EXPOSE 8080
CMD [ "npm", "start" ]