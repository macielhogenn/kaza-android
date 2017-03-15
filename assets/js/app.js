(function() {
    'use strict';

    angular.module('kaza', [
            'ionic',
            'ionic.cloud',
            'restangular'
        ])

        .config(function($ionicCloudProvider) {
            $ionicCloudProvider.init({
                "core": {
                    "app_id": "c9285cb8"
                },
                "push": {
                    "sender_id": "53130620467",
                    "pluginConfig": {
                        "ios": {
                            "badge": true,
                            "sound": true
                        },
                        "android": {
                            "iconColor": "#343434"
                        }
                    }
                }
            });
        })

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
            RestangularProvider.setBaseUrl('http://10.60.30.14:8080/');
            // RestangularProvider.setBaseUrl('http://kaza.hogenn.com/');
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