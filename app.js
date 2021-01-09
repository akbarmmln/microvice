var express = require('express'),
 app = express();

app.listen(8080);
console.log('i am listening on port 8080');
app.get('/', function(req,res){
 res.end('Hello, World!');
});