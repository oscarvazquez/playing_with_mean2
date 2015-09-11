Myapp.controller('topicController', function($scope, $routeParams, topicFactory, usersFactory){
	var topicID = $routeParams.topicID
	topicFactory.get_topic(topicID, function(data){
		$scope.topicdata = data;
	})
	usersFactory.getUser(function(data){
		$scope.current_user = data;
	})
	$scope.addPost = function() {
		var dataObj = ({user: $scope.current_user.name, post: $scope.newPost.post, userID: $scope.current_user._id, topicID: topicID})
		console.log(dataObj);
		topicFactory.addPost(dataObj, function(data){
			$scope.topicdata = data;
		})
	}
	$scope.addlike = function(topicdata) {
		topicFactory.addLike(topicdata, function(data){
			$scope.likes = data;
		})
	}
	$scope.add_dislike = function(topicdata) {
		topicFactory.addDislikes(topicdata, function(data){
			$scope.dislikes = data;
		})
	}
	// console.log($routeParams.topicID)
})