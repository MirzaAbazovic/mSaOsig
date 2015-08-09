angular.module('starter.controllers', [])

.controller('ContactCtrl', function($scope,$cordovaSms,$cordovaDialogs,$ionicPlatform,$cordovaEmailComposer) {
  //var mob =
  $scope.contact = {
    "mob":"+38761676178",
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
                intent: 'INTENT'  // send SMS with the native android SMS messaging
                //intent: '' // send SMS without open any other app
                }}
      $cordovaSms.send($scope.contact.mob, input, options)
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
                to: $scope.contact.email, // email addresses for TO field
                isHtml: true, // indicats if the body is HTML or plain text
            }, function () {
                console.log('email view dismissed');
            },
            this);    
})
//sendEmail END
}

//controller END
})

.controller('PolicyCtrl', function($scope) {
})

.controller('PolicyPzoCtrl', function($scope) {
})

.controller('PolicyAoCtrl', function($scope) {
})




.controller('MapCtrl', function($scope, $ionicLoading, Geo) {
  console.log("MapCtrl");

  $scope.initialise = function () {
    console.log("In Google.maps.event.addDomListener");
    var myLatlng = new google.maps.LatLng(43.855224, 18.420757);
    var mapOptions = {
      center: myLatlng,
                  zoom: 13,
                  mapTypeId: google.maps.MapTypeId.ROADMAP
    };
       
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    //Markeri firme 
    var image = 'img/marker.jpg';
    var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
    //Direkcija marker
    var contentDirekcija = '<div>'+
      '<b>Direkcija</b>'+
      '<p>Adresa: <b>Čobanija 14</b> <p>'+
      '<div>'+
      '<p>Tel: <b><a href="tel:+38733203270">(033)203-270</a></b>; <b><a href="tel:+38733443581">(033)443-581</a></b></p>'+
      '<p>Radno vrijeme</p>'+
      '<p>Prodaja polica: <b>07:30 - 15:30</b></p>'
      '</div>'+
      '</div>';
      var infowindowDirekcija = new google.maps.InfoWindow({content: contentDirekcija});
      var markerDirekcija = new google.maps.Marker({
      position: new google.maps.LatLng(43.855050, 18.420705),
      map: map,
      title: 'Direkcija | Čobanija 14 | (033)203-270 (033)443-581',
      icon: image
    });
    google.maps.event.addListener(markerDirekcija, 'click', function() {
      infowindowDirekcija.open(map,markerDirekcija);
    });
    //Podruznica Sarajevo Marker 
      var contentPodruznicaSarajevo = '<div>'+
       '<b>Podruznica Sarajevo</b>'+
      '<p>Adresa: <b>Maršala Tita 29</b> <p>'+
      '<div>'+
      '<p>Tel: <b><a href="tel:+38733569600">(033)569-600</a></b>; <b><a href="tel:+38733223835">(033)223-835</a></b></p>'+
      '<p>Radno vrijeme</p>'+
      '<p>Prodaja polica: <b>07:30 - 17:30</b></p>'+
      '<p>Prijava šteta: <b>07:30 - 15:30</b></p>'+
      '</div>'+
      '</div>';
      var infowindowPodruznicaSarajevo = new google.maps.InfoWindow({content: contentPodruznicaSarajevo});
      var markerPodruznicaSarajevo = new google.maps.Marker({
      position: new google.maps.LatLng(43.857547, 18.420854),
      map: map,
      title: 'Podružnica Sarajevo | Maršala Tita 29 | Tel: (033)569-600  (033)223-835',
      icon: image
    });
    google.maps.event.addListener(markerPodruznicaSarajevo, 'click', function() {
    infowindowPodruznicaSarajevo.open(map,markerPodruznicaSarajevo);
  });
    //Marker Podruznica Tuzla
    var markerFiliTuzla = new google.maps.Marker({
      position: new google.maps.LatLng(44.540692, 18.665643),
      map: map,
      title: 'Podružnica Tuzla | Slatina 4 | (035)369-100 (035)369-101',
      icon: image
    });

    var markerTehnickiVogosca = new google.maps.Marker({
      position: new google.maps.LatLng(43.896779, 18.361302),
      map: map,
      title: 'Tehnički pregled Vogošča | Muje Šejte 7 | (033)426-576',
       icon: image
    });
    //

    Geo.getLocation().then(function(position) {
      console.log(position);
      map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
      var myLocation = new google.maps.Marker({
        position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
        map: map,
        title: "Moja lokacija"
      });
    });

         
    navigator.geolocation.getCurrentPosition(function(pos) {
      console.log(pos);
      map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
      var myLocation = new google.maps.Marker({
        position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
        map: map,
        title: "Moja lokacija"
      });
    }, function() { console.log("Cannot find location");});

    $scope.map = map;
  };
  google.maps.event.addDomListener(document.getElementById("map"), 'load', $scope.initialise());
         
});


/*
.controller('MapCtrl', function($scope, $ionicLoading, Geo) {
  console.log("MapCtrl");
  $scope.initialise = function () {
    console.log("In Google.maps.event.addDomListener");
    var myLatlng = new google.maps.LatLng(37.3000, -120.4833);
    var mapOptions = {
      center: myLatlng,
                  zoom: 16,
                  mapTypeId: google.maps.MapTypeId.ROADMAP
    };
       
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    Geo.getLocation().then(function(position) {
      console.log(position);
      map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
      var myLocation = new google.maps.Marker({
        position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
        map: map,
        title: "My Location"
      });
    });

         
    navigator.geolocation.getCurrentPosition(function(pos) {
      console.log(pos);
      map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
      var myLocation = new google.maps.Marker({
        position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
        map: map,
        title: "My Location"
      });
    }, function() { console.log("Cannot find location");});

    $scope.map = map;
  };
  google.maps.event.addDomListener(document.getElementById("map"), 'load', $scope.initialise());
         
});
*/




/*
.controller('MapCtrl', function($scope, $ionicLoading, $compile,$cordovaGeolocation,$ionicPlatform) {
  $ionicPlatform.ready(function() {    
  $scope.initialize = function() {
  var posOptions = {timeout: 10000, enableHighAccuracy: false};
  $cordovaGeolocation
    .getCurrentPosition(posOptions)
    .then(function (position) {
      var lat  = position.coords.latitude
      var long = position.coords.longitude
//

  var myLatlng = new google.maps.LatLng(lat,long);
    var mapOptions = {
      center: myLatlng,
      zoom: 12,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

     
    var markerDirekcija = new google.maps.Marker({
      position: new google.maps.LatLng(43.855050, 18.420705),
      map: map,
      title: 'Direkcija | Čobanija 14 | (033)203-270 (033)443-581'
    });

    var markerFiliSarajevo = new google.maps.Marker({
      position: new google.maps.LatLng(43.857547, 18.420854),
      map: map,
      title: 'Podružnica Sarajevo | Maršala Tita 29 | Tel: (033)569-600  (033)223-835'
    });

    var markerFiliTuzla = new google.maps.Marker({
      position: new google.maps.LatLng(44.540692, 18.665643),
      map: map,
      title: 'Podružnica Tuzla | Slatina 4 | (035)369-100 (035)369-101'
    });

    var markerTehnickiVogosca = new google.maps.Marker({
      position: new google.maps.LatLng(43.896779, 18.361302),
      map: map,
      title: 'Tehnički pregled Vogošča | Muje Šejte 7 | (033)426-576 '
    });

    google.maps.event.addListener(markerDirekcija, 'click', function() {
      infowindow.open(map,markerDirekcija);
      
    });

    google.maps.event.addListener(markerFiliSarajevo, 'click', function() {
      infowindow.open(map,markerFiliSarajevo);
    });

    google.maps.event.addListener(markerFiliTuzla, 'click', function() {
      infowindow.open(map,markerFiliTuzla);
    });

      
    google.maps.event.addListener(markerTehnickiVogosca, 'click', function() {
      infowindow.open(map,markerTehnickiVogosca);
    });

      
      $scope.map = map;
//
    }, 
    function(err) {
      // error
    });
  }
  //google.maps.event.addDomListener(window, 'load', initialize);
})
})
*/