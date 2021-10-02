angular.module('JuegoCartas', [])
    .controller('ControlJuegoCartas', function ($scope){
        // Propiedades
        $scope.cartas = []
        $scope.grupos = []

        // Metodo que simula la repartición de las cartas
        $scope.repartir = function () {
            for (var i = 0; i < 10; i++) {
                $scope.cartas[i] = new Carta();
            }
        }
    }
    );