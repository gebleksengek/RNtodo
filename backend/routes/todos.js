var express = require('express');
var router = express.Router();
var models = require('../models/index');

router.get('/todos', function(req, res, next) {
  models.todos.findAll()
    .then(function(result) {
      res.send(result)
    })
});

router.post('/todos', function(req, res, next) {
  models.todos.create(req.body)
    .then(function(){
      res.send();
    })
})

router.put('/todos/:id', function(req, res) {
	models.todos.update(req.body, { where: { id: req.params.id }})
	  .then(function(){
			res.send()
		})
})

module.exports = router;
