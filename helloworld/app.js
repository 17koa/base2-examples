var app = require('base2')({
  // debug: true,
  root:__dirname
})

app.get('/', function(req, res){
  res.json({hello: 'world'});
})

app.start(3029);