var express = require('express');
var router = express.Router();
var models = require('../models/index');

router.get('/todos', function(req, res, next) {
  models.todos.findAll()
    .then(function(result) {
      res.send(result)
    })
});

router.get('/todos/:id', function(req, res, next) {
  models.todos.findAll( {where: { id: req.params.id }})
    .then(function(result) {
      res.send(result)
    })
})

router.post('/todos', function(req, res, next) {
  models.todos.create(req.body)
    .then(function(result){
      res.send(result);
    })
})

router.put('/todos/:id', function(req, res) {
	models.todos.update(req.body, { where: { id: req.params.id }})
	  .then(function(result){
			models.todos.findAll()
        .then(function(result){
	 	 	    res.send(result);
	 	    });
		})
})

router.delete('/todos/:id', function(req, res, next) {
  models.todos.destroy({ where: { id: req.params.id }})
    .then(function(result){
      res.status(200).send(req.params.id)
    })
    .catch(next)
})

module.exports = router;
