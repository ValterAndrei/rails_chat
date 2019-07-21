FROM ruby:latest

RUN apt-get update -qq && apt-get install -y build-essential nodejs libpq-dev \
  postgresql-client && rm -rf /var/lib/apt/lists/*

RUN curl -sL https://deb.nodesource.com/setup_11.x | bash -
RUN apt-get install -y nodejs

RUN npm install -g yarn

COPY . /usr/src/app
WORKDIR /usr/src/app