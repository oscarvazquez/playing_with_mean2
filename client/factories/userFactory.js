Myapp.factory('usersFactory', function($http) {
	var factory = {};
	var currentUser;
	factory.addUser = function(info, callback) {
		$http.post('/add_user', info).success(function(output){
			currentUser = output
			callback(output);
		})
	}
	factory.getUser = function(callback){
		callback(currentUser)
	}
	factory.getthisuser = function(info, callback){
		$http({url:'/get_this_user', method: 'get', params:{id:info}}).success(function(output){
			callback(output);
		})
	}
	return factory
})
