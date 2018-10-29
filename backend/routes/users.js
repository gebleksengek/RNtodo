var express = require('express');
var router = express.Router();
var models = require('../models/index');

router.get('/users', function(req, res, next) {
  models.users.findAll()
    .then(function(result) {
      res.send(result)
    })
});

router.get('/users/:id', function(req, res, next) {
  models.users.findOne( {where: { id: req.params.id }})
    .then(function(result) {
      res.send(result)
    })
})

router.post('/users', function(req, res, next) {
  models.users.create(req.body)
    .then(function(result){
      res.send(result);
    })
})

router.put('/users/:id', function(req, res) {
	models.users.update(req.body, { where: { id: req.params.id }})
	  .then(function(result){
			models.users.findAll()
        .then(function(result){
	 	 	    res.send(result);
	 	    });
		})
})

router.delete('/users/:id', function(req, res, next) {
  models.users.destroy({ where: { id: req.params.id }})
    .then(function(result){
      res.status(200).send(req.params.id)
    })
    .catch(next)
})

module.exports = router;
