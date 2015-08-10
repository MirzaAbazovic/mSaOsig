// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', [
  'ionic', 
  'starter.controllers', 
  'starter.services',
  'ngCordova',
  'ngSanitize'
  ])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
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

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

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
    .state('tab.policy.pzo', {
      url: '/policy/pzo',
      views: {
        'tab-policy-pzo': {
          templateUrl: 'templates/policy-pzo.html',
          controller: 'PolicyPzoCtrl'
        }
      }
    })
  .state('tab.policy.ao', {
      url: '/policy/ao',
      views: {
        'tab-policy-ao': {
          templateUrl: 'templates/policy-ao.html',
          controller: 'PolicyAoCtrl'
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

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/contact');

});
