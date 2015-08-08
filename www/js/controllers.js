angular.module('starter.controllers', [])

.controller('ContactCtrl', function($scope,$cordovaSms,$cordovaDialogs,$ionicPlatform,$cordovaEmailComposer) {
  //var mob =
  $scope.contact = {
    "mob":+38761676178,
    "mobDisplay":"(+387) 61 676 178",
    "email":"hracic@sarajevoosiguranje.ba"
  }
  
$scope.sendSms = function(){

$ionicPlatform.ready(function() {
  $cordovaDialogs.prompt('Poruka', 'Upisite poruku', ['Odustani','Pošalji'], '')
    .then(function(result) {
      var input = result.input1;
      // no button = 0, 'OK' = 1, 'Cancel' = 2
      var btnIndex = result.buttonIndex;
      if(btnIndex===1 && input.length>0){
                var options = {
                replaceLineBreaks: false, // true to replace \n by a new line, false by default
                android: {
                //intent: 'INTENT'  // send SMS with the native android SMS messaging
                intent: '' // send SMS without open any other app
                }}
      $cordovaSms.send('061636785', input, options)
      .then(function() {
        // Success! SMS was sent
         $cordovaDialogs.alert('Poruka je poslana')
      }, function(error) {
        // An error occurred
          $cordovaDialogs.alert('Došlo je do greške: Poruka NIJE poslana')
    
      }); 
      //if end
    }
    //msg dialog then
    });
  //ionicPlatformReady
  });
//smsSend END
}






$scope.sendEmail = function() {
$ionicPlatform.ready(function() {

            $cordovaEmailComposer.open({
                to:          ["mirza.abazovic@gmail.com"], // email addresses for TO field
                isHtml:    false, // indicats if the body is HTML or plain text
            }, function () {
                console.log('email view dismissed');
            },
            this);    
        
})
}
//controller
})

.controller('PolicyCtrl', function($scope) {
  
})

.controller('PolicyPzoCtrl', function($scope) {
 
})

.controller('PolicyAoCtrl', function($scope) {
  
})

.controller('MapCtrl', function($scope) {
 $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
});
