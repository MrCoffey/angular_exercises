angular.module("todoApp", ["LocalStorageModule"])
.controller("ToDoController", function($scope, localStorageService){
	if (localStorageService.get("todo-item")){
		$scope.todo = localStorageService.get("todo-item");
	}else{
		$scope.todo = [];		
	}

	$scope.$watchCollection("todo", function(newData, oldData){
		console.log(newData);
		console.log(oldData);
		localStorageService.set("todo-item", $scope.todo);

	})
	$scope.addActiv = function(){
		$scope.todo.push($scope.newActiv);
		$scope.newActiv = {};
	}
	$scope.clean = function(){
		$scope.todo = [];
	}
});