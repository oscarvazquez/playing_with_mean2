Myapp.controller('dashboardController', function($scope, topicFactory, usersFactory){
	topicFactory.get_topics(function(data){
		$scope.topics = data;
	})
	usersFactory.getUser(function(data){
		$scope.current_user = data;
	})
	$scope.addtopic = function() {
		topicFactory.addTopic($scope.newTopic, function(data){
			$scope.topics = data;
		})
	}
})