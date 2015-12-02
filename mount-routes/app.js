var app = require('base2')({
  debug: true,
  root:__dirname,
  "routes": "routes",
});

app.start(3029);