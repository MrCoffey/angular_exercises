var app = angular.module("MyFirstApp", []);

app.controller("FirstController", ["$scope", function($scope){
	$scope.nombre = "Lorena"
	$scope.nuevoComentario = {};

	$scope.comentarios= [{
		comentario : "Hola mundo 2",
		usuario : "Usuario mundo 2"
	},
	{
		comentario : "Mundo alreves",
		usuario : "Usuario mundial"
	}];

	$scope.agregarComentario = function(){
		$scope.comentarios.push($scope.nuevoComentario);
		$scope.nuevoComentario = {};
	};

}]);