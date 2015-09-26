angular.module('PokedexApp', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/', {
		controller:'MainController',
		templateUrl:'views/home.html'
	}).when('/dex/:dexnum', {
		controller:'DexController',
		templateUrl:'views/pokemon.html'
	}).otherwise({
		redirectTo: '/'
	})
}])

.controller('MainController', ['$scope', function($scope) {
	console.log('MAIN')
}])
.controller('DexController', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
	$scope.dexnum = $routeParams.dexnum;
	$scope.root = "http://pokeapi.co"
	var url = "http://pokeapi.co/api/v1/pokemon/" + $scope.dexnum + "/";
	$http.get(url).success(function(data) {
		$scope.pokemon = data;
		console.log($scope.pokemon)

	})


	$scope.getData = function(uri) {
		var url = $scope.root + uri;
		$http.get(url).success(function(data) {
			console.log(data)
		})
	}

}])

