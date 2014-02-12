var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
  var buffer = fs.readFileSync('index.html');
  var text = buffer.toString('utf-8');

  response.send('Grrrr!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
