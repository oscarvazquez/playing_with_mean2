var mongoose = require('mongoose');
var moment = require('moment');
var Schema = mongoose.Schema;

var userSchema = new mongoose.Schema({
	name: String,
	topics: [{ type:Schema.ObjectId, ref: "topic"}],
	posts: [{ type:Schema.ObjectId, ref: 'post'}]
})

mongoose.model('user', userSchema)