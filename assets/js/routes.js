(function() {
    'use strict';

    angular
        .module('kaza')
        .config(function($stateProvider, $urlRouterProvider) {
            $stateProvider

                .state('tab', {
                    url: '/tab',
                    abstract: true,
                    templateUrl: 'templates/tabs.html'
                })

                .state('tab.dash', {
                    url: '/dash',
                    views: {
                        'tab-dash': {
                            templateUrl: 'templates/tab-dash.html',
                            controller: 'DashboardController',
                            controllerAs: 'Dashboard'
                        }
                    }
                })

                .state('tab.alarme', {
                    url: '/alarme',
                    views: {
                        'tab-alarme': {
                            templateUrl: 'templates/tab-alarme.html',
                            controller: 'AlarmeController',
                            controllerAs: 'Alarme'
                        }
                    }
                })
                ;

            $urlRouterProvider.otherwise('/tab/dash');
        })
})();