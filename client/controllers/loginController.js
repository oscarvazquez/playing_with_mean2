Myapp.controller('loginController', function($scope, usersFactory, $location){
	$scope.add_user = function() {
		usersFactory.addUser($scope.new_user, function(data){
			$scope.current_user = data
			console.log($scope.current_user);
			// console.log($scope.new_user)
					$location.path('/dashboard')

		})
	}
	// $scope.get_user = function() {
	// 	usersFactory.getUser(oneUser, function(data){
	// 		$scope
	// 	})
	// }
})
