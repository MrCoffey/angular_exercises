angular.module("restApp", ["LocalStorageModule"])
.controller("restController", function($scope, $http, localStorageService){
	$scope.newPost = {};
	
	if (localStorageService.get("current-post")) {
		$scope.posts = localStorageService.get("current-post");
	}else{
		$scope.posts = [];
	};

	$scope.$watchCollection("post-collection", function(newData, oldData){
		console.log(newData);
		console.log(oldData);
		localStorageService.set("current-post", $scope.posts);
	})

	$http.get("http://jsonplaceholder.typicode.com/posts")
		.success(function(data){
			console.log(data);
			$scope.posts = data;
		})
		.error(function(error){
			console.log(error);
		})

	$scope.createPost = function(){
		$http.post("http://jsonplaceholder.typicode.com/posts")
			.success(function(data, header, status, config){
				$scope.posts.push($scope.newPost);
				$scope.newPost = {};
			})	
			.error(function(error, header, status, config){
				console.log(error);
			})	
	}
	
	$scope.clean = function(){
		$scope.posts = [];
	}
});