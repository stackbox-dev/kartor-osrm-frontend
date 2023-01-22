FROM asia-docker.pkg.dev/sbx-ci-cd/public/nginx:latest

# Enables customized options using environment variables
ENV OSRM_BACKEND='http://localhost:5000'
ENV OSRM_CENTER='12.9716,77.5946'
ENV OSRM_ZOOM='13'
ENV OSRM_LANGUAGE='en'
ENV OSRM_LABEL='OSRM'

# Copy package.json
RUN mkdir -p /src
COPY package.json /src
COPY ./serve.conf.template /etc/nginx/templates/

# Install app dependencies
RUN apk add --no-cache sed nodejs npm && \
    cd /src && \
    npm install

# Create app directory
COPY . /src
WORKDIR /src


RUN npm run build
