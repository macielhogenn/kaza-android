(function() {
    'use strict';

    angular
        .module('kaza')
        .config(function($stateProvider, $urlRouterProvider) {
            $stateProvider

                .state('dashboard', {
                    url: '/dashboard',
                    templateUrl: 'templates/dashboard.html',
                    controller: 'DashboardController',
                    controllerAs: 'Dashboard'
                })
            ;

            $urlRouterProvider.otherwise('/dashboard');
        })
})();