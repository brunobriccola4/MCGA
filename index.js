var express = require('express');
var api = require('./routes/api');
var dynamic = require('./routes/dynamic');

var app = express();
var port = 3000;

app.use('/static', express.static('assets'));
app.use('/api', api);
app.use('/', dynamic);

app.get('/bye', function (req, res)
{
	var html = '<h1> No Authorized </h1>';
	res.status(401).send(html);
})

app.listen(port, function () {
  console.log('Full server on '+ port);
});
