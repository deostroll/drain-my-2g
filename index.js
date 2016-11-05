var express = require('express');
var http = require('http');
var app = express();
var morgan = require('morgan');
app.use(morgan('combined'));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.end('Hello World...');
});


http.createServer(app).listen(3000, function(err){
  if(err) {
    console.error('Error:', err);
  }
  else {
    console.log('Running...');
  }
})
