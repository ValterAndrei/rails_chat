FROM ruby:2.6.3

RUN apt-get update -qq && apt-get install -y build-essential tzdata nodejs libpq-dev \
  postgresql-client && rm -rf /var/lib/apt/lists/*

RUN curl -sL https://deb.nodesource.com/setup_12.x | bash -
RUN apt-get install -y nodejs

RUN npm install -g yarn
RUN yarn install --check-files

COPY . /usr/src/app
WORKDIR /usr/src/app
