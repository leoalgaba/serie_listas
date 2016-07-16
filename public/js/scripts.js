var app = angular.module('app', []);

app.controller('serieCtrl', function ($scope,$http) {
	$http.get('/db/titulo')
		.success(function (data) {
			$scope.titulos = data;
			$scope.cargarTemporada()
		});
	$scope.cargarTemporada = function () {
		$http.get('/db/temporada/' + $scope.titulo)
			.success (function (data) {
				$scope.temporadas = data;
				$scope.cargarCapitulos()
			})
	};
	$scope.cargarCapitulos = function () {
		$http.get('/db/capitulo/' + $scope.temporada)
			.success (function (data) {
				$scope.capitulos = data
			})
	}
})

