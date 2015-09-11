Myapp.controller('userController', function($scope, $routeParams, usersFactory){
	var usersID = $routeParams.userID
	usersFactory.getthisuser(usersID, function(data){
		$scope.user = data;
	})
})