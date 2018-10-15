const express = require('express');
const router = express.Router();
const Todo = require('./models/todo');

router.get('/todo', function(req, res) {
	Todo.find({})
	 .then(function(result){
	 	res.send(result);
	 })
	console.log('get all');
});

router.get('/todo/:id', function(req, res){
	Todo.findOne({_id: req.params.id})
	 .then(function(result){
	 	res.send(result);
	 })

	console.log('get one');
})

router.post('/todo', function(req, res, next) {
	const {plan} = req.body;
	
	Todo.create(req.body)
	 .then(function(result){
	 	res.send(result);
	 })
	 .catch(next)

	console.log('post');
});

router.put('/todo/:id', function(req, res) {
	Todo.findOneAndUpdate({_id: req.params.id}, req.body)
	 .then(function(result){
	 	Todo.findOne({_id: req.params.id})
	 	 .then(function(result){
	 	 	res.send(result);
	 	 });
	 });

	console.log('update');
});

router.delete('/todo/:id', function(req, res) {
	Todo.findOneAndRemove({_id: req.params.id})
	 .then(function(result){
	 	res.send(result);
	 });

	console.log('delete');
});

module.exports = router;