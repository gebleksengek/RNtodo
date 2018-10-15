const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routers = require('./routers');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/todo');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

app.use('/api', routers);

app.use(function(err, req, res, next){
	res.status(422).send({err: err.message});
});

app.listen(3000, function() {
	console.log('express now listening');
});