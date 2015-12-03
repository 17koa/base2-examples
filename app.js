var app = require('base2')({
  debug: true,
  // root:__dirname,
  "routes": "mount-routes/routes",
  // "routes": "routes",
});

app.start(3029);