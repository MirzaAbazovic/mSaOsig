angular.module('starter', [
  'ionic',
  'mSaOsig.controllers',
  'mSaOsig.services',
  'ngCordova',
  'ngSanitize'
])

.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleLightContent();
        }
    });
})

.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
    .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html'
    })
    .state('tab.contact', {
        url: '/contact',
        views: {
            'tab-contact': {
                templateUrl: 'templates/tab-contact.html',
                controller: 'ContactCtrl'
            }
        }
    })
    .state('tab.policy', {
        url: '/policy',
        views: {
            'tab-policy': {
                templateUrl: 'templates/tab-policy.html',
                controller: 'PolicyCtrl'
            }
        }
    })
    .state('tab.map', {
        url: '/map',
        views: {
            'tab-map': {
                templateUrl: 'templates/tab-map.html',
                controller: 'MapCtrl'
            }
        }
    })
     .state('tab.car', {
         url: '/car',
         views: {
             'tab-car': {
                 templateUrl: 'templates/tab-car.html',
                 controller: 'CarCtrl'
             }
         }
     });
    $urlRouterProvider.otherwise('/tab/contact');
});