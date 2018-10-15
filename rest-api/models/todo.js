const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
	plan: {
		type: String,
		required: true
	}
});

const Todo = mongoose.model('todo', TodoSchema);

module.exports = Todo;