angular.module('mSaOsig.controllers', [])

//KONTAKTI ZA PZO
.controller('ContactCtrl', function ($scope, 
    $cordovaSms,
     $cordovaDialogs, 
     $ionicPlatform, 
     $cordovaEmailComposer,
     $cordovaSocialSharing) {
    //var mob =
    $scope.contact = {
        "mob": "+38761489999",//hamo
        "mobDisplay": "(+387) 61 489 999",
        "email": "pzo@sarajevoosiguranje.ba"
    }
    $scope.sendSms1 = function(){
          $ionicPlatform.ready(function () {       
        var number = $scope.contact.mob;
        $cordovaSocialSharing
    .shareViaSMS("", number)
    .then(function(result) {
      // Success!
    }, function(err) {
      // An error occurred. Show a message to the user
    });

    })}
          /*
    $scope.sendSms = function () {
        $ionicPlatform.ready(function () {
            $cordovaDialogs.prompt('Poruka', 'Upisite poruku', ['Odustani', 'Pošalji'], '')
              .then(function (result) {
                  var input = result.input1;
                  // no button = 0, 'OK' = 1, 'Cancel' = 2
                  var btnIndex = result.buttonIndex;
                  if (btnIndex === 1 && input.length > 0) {
                      var options = {
                          replaceLineBreaks: false, // true to replace \n by a new line, false by default
                          android: {
                              intent: 'INTENT'  // send SMS with the native android SMS messaging
                              //intent: '' // send SMS without open any other app
                          }
                      }
                      $cordovaSms.send($scope.contact.mob, input, options)
                      .then(function () {
                          // Success! SMS was sent
                          $cordovaDialogs.alert('Poruka je poslana')
                      }, function (error) {
                          // An error occurred
                          $cordovaDialogs.alert('Došlo je do greške: Poruka NIJE poslana')

                      });
                  }
              });
        });
    }
    */
    $scope.sendEmail = function () {
       //$ionicPlatform.ready(function () {
            $cordovaEmailComposer.open({
                to: $scope.contact.email, // email addresses for TO field
                isHtml: true, // indicats if the body is HTML or plain text
            }, function () {
                console.log('email view dismissed');
            },
            this);
        //})
    }
})

//KALKULATOR PZO POLICE
.controller('PolicyCtrl', function ($scope) {
    $scope.policy = {};
    var today = new Date();
    $scope.policy.dateFrom = today;
    $scope.policy.dateTo = today;
    $scope.policy.number = "";

})


//INFO ZA POMOC NA CESTI
.controller('CarCtrl', function ($scope, $ionicModal) {

    $ionicModal.fromTemplateUrl('step1-modal.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function (modal) {
        $scope.modal1 = modal;
    });
    $scope.openModal1 = function () {
        $scope.modal1.show();
    };
    $scope.closeModal1 = function () {
        $scope.modal1.hide();
    };
    //Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function () {
        $scope.modal1.remove();
    });

$scope.ime='Ajla';

    $ionicModal.fromTemplateUrl('step2-modal.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function (modal) {
        $scope.modal2 = modal;
    });
    $scope.openModal2 = function () {
        $scope.modal2.show();
    };
    $scope.closeModal2 = function () {
        $scope.modal2.hide();
    };
    //Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function () {
        $scope.modal2.remove();
    });


    $ionicModal.fromTemplateUrl('step3-modal.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function (modal) {
        $scope.modal3 = modal;
    });
    $scope.openModal3 = function () {
        $scope.modal3.show();
    };
    $scope.closeModal3 = function () {
        $scope.modal3.hide();
    };
    //Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function () {
        $scope.modal3.remove();
    });


  $ionicModal.fromTemplateUrl('step4-modal.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function (modal) {
        $scope.modal4 = modal;
    });
    $scope.openModal4 = function () {
        $scope.modal4.show();
    };
    $scope.closeModal4 = function () {
        $scope.modal4.hide();
    };
    //Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function () {
        $scope.modal4.remove();
    });



  $ionicModal.fromTemplateUrl('step5-modal.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function (modal) {
        $scope.modal5 = modal;
    });
    $scope.openModal5 = function () {
        $scope.modal5.show();
    };
    $scope.closeModal5 = function () {
        $scope.modal5.hide();
    };
    //Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function () {
        $scope.modal5.remove();
    });




  $ionicModal.fromTemplateUrl('step6-modal.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function (modal) {
        $scope.modal6 = modal;
    });
    $scope.openModal6 = function () {
        $scope.modal6.show();
    };
    $scope.closeModal6 = function () {
        $scope.modal6.hide();
    };
    //Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function () {
        $scope.modal6.remove();
    });

})



//MAPA
.controller('MapCtrl', function ($scope, $ionicLoading, Geo) {
    console.log("MapCtrl");
    $scope.initialise = function () {
        var myLatlng = new google.maps.LatLng(43.855224, 18.420757);
        var mapOptions = {
            center: myLatlng,
            zoom: 13,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
        var image = 'img/marker7.png';
        var markers = Geo.getMarkersData();
        for (var i = 0; i < markers.length; i++) {
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(markers[i].lat, markers[i].lng),
                map: map,
                title: markers[i].title,
                icon: image
            });
            attachMessage(marker, markers[i].content);
        }
        Geo.getLocation().then(function (position) {
            console.log(position);
            map.setCenter(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
            var myLocation = new google.maps.Marker({
                position: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                map: map,
                title: "Moja lokacija"
            });
        });
        $scope.map = map;
    };
    function attachMessage(marker, message) {
        var infowindow = new google.maps.InfoWindow({
            content: message
        });
        google.maps.event.addListener(marker, 'click', function () {//'mouseover' je malo previse
            infowindow.open(marker.get('map'), marker);
        });
    }
    google.maps.event.addDomListener(document.getElementById("map"), 'load', $scope.initialise());
});