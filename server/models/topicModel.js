var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var topicSchema = new mongoose.Schema({
	title: String, 
	category: String, 
	description: String, 
	posts: [{ type:Schema.ObjectId, ref: 'post'}],
	user: String,
	likes: Number {default: 0},
	dislikes: Number {default: 0}

})
mongoose.model('topic', topicSchema);