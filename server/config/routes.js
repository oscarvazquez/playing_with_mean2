var userController = require('./../controllers/users.js')
var topicController = require('./../controllers/topics.js')


module.exports = function(app){
	app.get('/get_topic', function(req, res){
		topicController.getTopics(req, res);
	})
	app.post('/add_user', function(req, res){
		userController.addUser(req, res);
	})
	app.post('/add_topic', function(req, res){
		topicController.addTopic(req, res);
	})
	app.get('/get_one_topic', function(req, res){
		topicController.getOneTopic(req, res);
	})
	app.post('/add_post', function(req, res){
		topicController.addPost(req, res);
	})
	app.get('/get_this_user', function(req, res){
		userController.getUser(req, res);
	})
	app.post('/add_like', function(req, res){
		topicController.addLike(req, res);
	})
	app.post('/add_dislike', function(req, res){
		topicController.addDislike(req, res);
	})
}