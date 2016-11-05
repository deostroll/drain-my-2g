var express = require('express');
var http = require('http');
var app = express();
var morgan = require('morgan');
app.use(morgan('combined'));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.end('Hello World...');
});
var length = 1024 * 1024 * 2;
var buf = Buffer.alloc(length, 'a');

app.get('/drain', (_, res) => {
  res.end(buf);
});

http.createServer(app).listen(3000, function(err){
  if(err) {
    console.error('Error:', err);
  }
  else {
    console.log('Running...');
  }
})
