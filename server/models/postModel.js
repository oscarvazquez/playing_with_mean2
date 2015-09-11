var mongoose = require('mongoose');
var moment = require('moment');
var Schema = mongoose.Schema;

var postSchema = new mongoose.Schema({
	user: String, 
	post: String, 
	_topic: {type:Schema.ObjectId, ref: 'topic'},
	_user: {type:Schema.ObjectId, ref: 'user'}
})
mongoose.model('post', postSchema);