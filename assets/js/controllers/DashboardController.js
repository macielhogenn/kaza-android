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

            vm.acionarLampada = function(param) {
                Api.acionarLampada(param);
            };

            vm.intensidadeLampada = function() {
                Api.intensidadeLampada(vm.intensidade);
            };

            vm.acionarPortao = function(param) {
                Api.acionarPortao(param);
            };

            vm.acionarAlarme = function(param) {
                Api.acionarAlarme(param);
            };
        }
})();