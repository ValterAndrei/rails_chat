# Configurando a parte inicial do projeto

1. Criando os arquivos

```
$ touch Dockerfile docker-compose.yml Procfile.dev
```

* Dockerfile

```
FROM ruby:latest

RUN apt-get update -qq && apt-get install -y build-essential nodejs libpq-dev \
  postgresql-client && rm -rf /var/lib/apt/lists/*

RUN curl -sL https://deb.nodesource.com/setup_11.x | bash -
RUN apt-get install -y nodejs

RUN npm install -g yarn

COPY . /usr/src/app
WORKDIR /usr/src/app
```

* docker-compose.yml

```
version: '3.7'

volumes:
  gems-app:

services:
  web:
    tty: true
    stdin_open: true
    build: .
    environment:
      REDIS_URL: 'redis://redis:6379/12'
      DATABASE_URL: postgres://postgres@db
    command: foreman start -f Procfile.dev
    volumes:
      - ./:/usr/src/app
      - gems-app:/usr/local/bundle
    ports:
      - '3000:3000'
      - '3035:3035'
    depends_on:
      - db
      - redis

  db:
    image: postgres

  redis:
    image: redis
    command: redis-server
    ports:
      - '6379:6379'

  sidekiq:
    build: .
    environment:
      REDIS_URL: 'redis://redis:6379/12'
    command: bundle exec sidekiq -C ./config/sidekiq.yml
    volumes:
      - ./:/usr/src/app
      - gems-app:/usr/local/bundle
    depends_on:
      - db
      - redis
```

* Procfile.dev

```
web: bash -c "rm -f tmp/pids/server.pid && bundle exec rails s -p 3000 -b '0.0.0.0'"
webpacker: ./bin/webpack-dev-server
```

2. Instalar o Rails 6

```
$ docker-compose run --rm web gem install rails -v 6.0.0.rc1
```

3. Criar o projeto

```
$ docker-compose run --rm web rails new . -T --force --database=postgresql
```

4. Adicionar a gem foreman em seu `Gemfile`

```
gem 'foreman'

# execute o bundle em seguida:
$ docker-compose run --rm web bundle
```

5. Instalando configurações do webpacker

```
$ docker-compose run --rm web rails webpacker:install
```

6. Editar a configuração host do webpacker `config/webpacker.yml`

```
dev_server:
  host: 0.0.0.0
```

7. Configurando o banco de dados `database.yml`

```
development: &default
  adapter: postgresql
  database: chat_tutorial_development
  encoding: unicode
  username: postgres
  password:
  pool: <%= ENV.fetch("RAILS_MAX_THREADS") { 5 } %>
  url: <%= ENV['DATABASE_URL'] %>

test:
  <<: *default
  database: chat_tutorial_test

production:
  <<: *default
  database: chat_tutorial_production
```

8. Criando o banco de dados

```
$ docker-compose run --rm web rails db:create
```

9. Subindo seu servidor

```
$ docker-compose up web
```

10. Acessar o endereço `localhost:3000`
