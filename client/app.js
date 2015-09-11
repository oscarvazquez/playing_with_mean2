var Myapp = angular.module('Myapp', ['ngRoute']);

(function(){
	Myapp.config(function ($routeProvider) {
		$routeProvider
		.when("/",
		{
			controller: "loginController",
			templateUrl: "partials/login.html"
		})
		.when("/dashboard",
		{
			controller: "dashboardController",
			templateUrl: "partials/dashboard.html"
		})
		.when("/topic/:topicID",
		{
			controller: "topicController",
			templateUrl: "partials/topic.html"
		})
		.when("/user/:userID",
		{
			controller: "userController",
			templateUrl: "partials/user.html"
		})
		.otherwise({ redirectTo: '/'});
	})
}());