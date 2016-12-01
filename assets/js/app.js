(function() {
    'use strict';

    angular.module('kaza', [
            'ionic',
            'restangular'
        ])

        .run(function($ionicPlatform) {
            $ionicPlatform.ready(function() {
                if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                    cordova.plugins.Keyboard.disableScroll(true);
                }

                if (window.StatusBar) {
                    StatusBar.styleDefault();
                }
            });
        })

        .config(function(RestangularProvider) {
            RestangularProvider.setBaseUrl('http://kaza.hogenn.com/');
        })

        .run(function(Restangular) {
            Restangular.setErrorInterceptor(function(response, deferred, responseHandler) {
                if (response.status === 404) {
                    return false;
                }

                return true;
            });
        })
    ;
})();