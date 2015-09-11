var mongoose = require('mongoose');
var topic = mongoose.model('topic');
var user = mongoose.model('user');
var post = mongoose.model('post');
module.exports = (function(){
	return {
		addTopic: function(req, res){
			var new_topic = new topic({ title: req.body.title, category: req.body.category, description: req.body.description, user: req.body.name })
			console.log(new_topic)
			console.log(req.body.name)
			new_topic.save(function(err){
				if(err)
				{
					console.log(err);
				}
				else
				{
					topic.find({}, function(err, all_topic){
						if(err)
						{
							console.log(err)
						}
						else
						{
							console.log("added new topic");
							console.log(all_topic)
							res.json(all_topic);
						}
					})
				}
			})
		},
		getTopics: function(req, res){
			topic.find({}, function(err, topics){
				if(err)
				{
					console.log(err);
				}
				else
				{
					console.log('got all topics');
					res.json(topics);
				}
			})
		},
		getOneTopic: function(req, res){
			console.log(req.query.id)
			topic.findOne({_id: req.query.id})
				 .populate('posts')
				 .exec(function (err, fullTopic){
				if(err)
				{
					console.log(err)
					console.log('savaec')
				}
				else
				{
					
					res.json(fullTopic);
				}
			})
		},
		addPost: function(req, res){
			topic.findOne({_id: req.body.topicID}, function(err, papa_topic){
				user.findOne({_id: req.body.userID}, function(err, papa_user){ 
					if(err)
					{
						console.log('coudlnt find topic')
					}
					else
					{
						var new_post = new post({user: req.body.user, post: req.body.post, _topic: req.body.topicID, _user: req.body.userID})
						papa_topic.posts.push(new_post._id);
						papa_user.posts.push(new_post._id);
							papa_topic.save(function(err){
								papa_user.save(function(err){
									new_post.save(function(err){
										if(err)
										{
											console.log(err);
										}
										else
										{
											topic
											.findOne({_id: req.body.topicID})
											.populate('posts')
											.exec(function (err, total_topic){
												if(err)
												{
													console.log(err);
												}
												else
												{
													res.json(total_topic);
												}
											})
										}
									})
								})
							})
					}
				})	
			})
		}
	}
})();