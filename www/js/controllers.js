angular.module('starter.controllers', [])

.controller('ContactCtrl', function($scope) {
  $scope.contact = {
    "mob":+38761123123,
    "mobDisplay":"(+387) 61 123 123",
    "email":"hracic@sarajevoosiguranje.ba"
  }
})

.controller('PolicyCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('PolicyPzoCtrl', function($scope) {
 
})

.controller('PolicyAoCtrl', function($scope) {
  
})

.controller('MapCtrl', function($scope) {
 
});
