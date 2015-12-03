# Getting Start

## prepare

```
npm init
npm install --save base2
```

## hello world

create app.js

```
var app = require('base2')({
  // debug: true,
  root:__dirname
})

app.get('/', function(req, res){
  res.json({hello: 'world'});
})

app.start(3029);
```

run 

```
npm run 1
```

open in browser

- http://127.0.0.1:3029/

## mount routes from folder

install express 

```
npm i --save express
```

create app.js

```
var app = require('base2')({
  // debug: true,
  root:__dirname,
  "routes": "routes",
});

app.start(3029);
```

create routes folder

routes/index.js

```
var express     = require('express');
var router      = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send('respond with a routes /');
});

module.exports = router;
```

routes/users.js

```
var express     = require('express');
var router      = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource /users');
});

module.exports = router;
```

run 

```
npm run 2
```

open in browser

- http://127.0.0.1:3029/
- http://127.0.0.1:3029/users

## views engine with jade

duplicate mount-routes with views-jade

install jade 

```
npm i --save jade
```

modify app.js

```
var app = require('base2')({
  // debug: true,
  root:__dirname,
  "routes": "routes",
  "views" : "views"
});

app.start(3029);
```

only add views option

run 

```
npm run 3
```

## static server

### simple static server

```
var app = require('base2')({
  // debug: true,
  root:__dirname,
  "public": "public",
})

app.start(3029);
```

only add public option

run 

```
npm run 4
```

### static server 2

with views

run 

```
npm run 5
```

- http://127.0.0.1:3029/
- http://127.0.0.1:3029/index.html


## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## 版本历史

- v1.0.0 初始化版本

## 欢迎fork和反馈

- write by `i5ting` i5ting@126.com

如有建议或意见，请在issue提问或邮件

## License

this repo is released under the [MIT
License](http://www.opensource.org/licenses/MIT).
