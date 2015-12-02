var app = require('base2')({
  debug: true,
  root:__dirname,
  "routes": "routes",
  "views" : "views"
});

app.start(3029);