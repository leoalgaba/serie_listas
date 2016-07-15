var app = angular.module('app', []);

app.controller('serieCtrl', function ($scope,$http) {
	$http.get('/data/titulos.json')
		.success(function (titu) {
			$scope.titulos = titu;
			$scope.cargarTemporada();
		});
	$scope.cargarTemporada = function () {
		$http.get('/data/temporadas.json')
			.success(function (tempo) {
				$scope.temporadas = tempo;
				$scope.cargarCapitulo()
		})
	};
	$scope.cargarCapitulo = function () {
		$http.get('/data/capitulos.json')
			.success(function (capi) {
				$scope.capitulos = capi;
		})
	}
})

