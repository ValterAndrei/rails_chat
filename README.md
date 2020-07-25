# README

1. Build image
```
docker-compose build
```

2. Access bash
```
docker-compose run --rm web bash
```

3. Install dependencies
```
bundle
yarn
rails db:setup
```

4. Run project
```
docker-compose up web
```

[localhost:3000](http://localhost:3000)

[Reference](https://iridakos.com/tutorials/2019/04/04/creating-chat-application-rails-websockets.html)
