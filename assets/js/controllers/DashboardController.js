(function() {
    'use strict';

    angular
        .module('kaza')
        .controller('DashboardController', DashboardController);

        function DashboardController($ionicPush, Api) {
            $ionicPush.register().then(function(t) {
              return $ionicPush.saveToken(t);
            }).then(function(t) {
              console.log('Token saved:', t.token);
            });

            var vm = this;
            vm.intensidade = 50;

            vm.acionarLampada = function() {
                Api.acionarLampada();
            };

            vm.intensidadeLampada = function() {
                Api.intensidadeLampada(vm.intensidade);
            };

            vm.acionarPortao = function() {
                Api.acionarPortao();
            };

            vm.acionarAlarme = function() {
                Api.acionarAlarme();
            };
        }
})();