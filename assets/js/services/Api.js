(function() {
    'use strict';

    angular
        .module('kaza')
        .service('Api', function(Restangular) {
            return {
                acionarLampada: function(param) {
                    param = (typeof param !== 'undefined' && !param) ? false : true;
                    param = param ? 1 : 0;

                    return Restangular.one('acionar?lampada=' + param).get();
                },
                intensidadeLampada: function(param) {
                    param = (typeof param !== 'undefined') ? param : 50;

                    return Restangular.one('intensidade?luminosidade=' + param).get();
                },
                acionarPortao: function(param) {
                    param = (typeof param !== 'undefined' && !param) ? false : true;
                    param = param ? 1 : 0;

                    return Restangular.one('abrir?portao_eletronico=' + param).get();
                },
                acionarAlarme: function(param) {
                    param = (typeof param !== 'undefined' && !param) ? false : true;
                    param = param ? 1 : 0;

                    return Restangular.one('ativar?alarme=' + param).get();
                }
            };
        });
})();