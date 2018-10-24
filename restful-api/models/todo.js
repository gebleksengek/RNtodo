const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
	plan: {
		type: String,
		required: true
	}
});

const Todo = mongoose.model('todos', TodoSchema);

module.exports = Todo;