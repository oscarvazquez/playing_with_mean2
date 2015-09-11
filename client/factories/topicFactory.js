Myapp.factory('topicFactory', function($http){
	var factory = {}
	factory.addTopic = function(info, callback) {
		$http.post('/add_topic', info).success(function(output){
			callback(output);
		});
	}
	factory.get_topics = function(callback) {
		$http.get('/get_topic').success(function(output) {
			callback(output);
		})
	}
	factory.get_topic = function(topicID, callback) {
		$http({url: '/get_one_topic', method: 'get', params:{id:topicID}}).success(function(output){
			callback(output);
		})
	}
	factory.addPost = function(post_data, callback){
		$http.post('/add_post', post_data).success(function(output){
			callback(output);
		})
	}
	factory.addDislikes = function(topicdata, callback){
		$http.post('/add_dislike', topicdata).success(function(output){
			callback(output)
		})
	}
	factory.addLike = function(topicdata, callback){
		$http.post('/add_like', topicdata).success(function(output){
			callback(output);
		})
	}
	return factory;
})