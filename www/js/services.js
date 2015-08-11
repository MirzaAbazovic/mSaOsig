angular.module('mSaOsig.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Geo', function ($q) {
    return {
        reverseGeocode: function (lat, lng) {
            console.log("GEO FACTORY");
            var q = $q.defer();
            var geocoder = new google.maps.Geocoder();
            console.log("geocoder");
            geocoder.geocode({
                'latLng': new google.maps.LatLng(lat, lng)
            }, function (results, status) {
                console.log("geocoder.geocode");
                if (status == google.maps.GeocoderStatus.OK) {
                    console.log('Reverse', results);
                    if (results.length > 1) {
                        var r = results[1];
                        var a, types;
                        var parts = [];
                        var foundLocality = false;
                        var foundState = false;
                        for (var i = 0; i < r.address_components.length; i++) {
                            a = r.address_components[i];
                            types = a.types;
                            for (var j = 0; j < types.length; j++) {
                                if (!foundLocality && types[j] == 'locality') {
                                    foundLocality = true;
                                    parts.push(a.long_name);
                                } else if (!foundState && types[j] == 'administrative_area_level_1') {
                                    foundState = true;
                                    parts.push(a.short_name);
                                }
                            }
                        }
                        console.log('Reverse', parts);
                        q.resolve(parts.join(', '));
                    }
                } else {
                    console.log('reverse fail', results, status);
                    q.reject(results);
                }
            })

            return q.promise;
        },
        getLocation: function () {
            console.log("Geo.getLocation");
            var q = $q.defer();
            console.log("Calling Navigator.geolocation");
            navigator.geolocation.getCurrentPosition(function (position) {
                q.resolve(position);
                console.log(position);
            }, function (error) {
                q.reject(error);
            });

            return q.promise;
        },
        getMarkersData: function () {
            return [
            {
                lat: 43.855050, lng: 18.420705,
                title: "Direkcija | Čobanija 14",
                content: '<div>' +
              '<b>Direkcija</b>' +
              '<p>Adresa: <b>Čobanija 14</b> <p>' +
              '<div>' +
              '<p>Tel: <b><a href="tel:+38733203270">(033)203-270</a></b>; <b><a href="tel:+38733443581">(033)443-581</a></b></p>' +
              '<p>Radno vrijeme</p>' +
              '<p><b>Pon-Pet 07:30-15:30</b></p>' +
              '</div>' +
              '</div>'
            },
            {
                lat: 43.857547, lng: 18.420854,
                title: "Podružnica Sarajevo | Maršala Tita 29",
                content: '<div>' +
              '<b>Podruznica Sarajevo</b>' +
              '<p>Adresa: <b>Maršala Tita 29</b> <p>' +
              '<div>' +
              '<p>Tel: <b><a href="tel:+38733569600">(033)569-600</a></b>; <b><a href="tel:+38733223835">(033)223-835</a></b></p>' +
              '<p>Radno vrijeme</p>' +
              '<p><b>Pon-Pet 07:30-17:30 Sub 07:30-15:30</b></p>' +
              '</div>' +
              '</div>'
            },
              {
                  lat: 44.540692, lng: 18.665643,
                  title: "Podružnica Tuzla | Slatina 4",
                  content: '<div>' +
                '<b>Podruznica Tuzla</b>' +
                '<p>Adresa: <b>Slatina 4</b> <p>' +
                '<div>' +
                '<p>Tel: <b><a href="tel:+387035369100">(035)369-100</a></b>; <b><a href="tel:+38735369101">(035)369-101</a></b></p>' +
                '<p>Radno vrijeme</p>' +
                '<p><b>Pon-Pet 07:30-15:30</b></p>' +
                '</div>' +
                '</div>'
              },
              {
                  lat: 43.344792,  lng: 17.808845,
                  title: "Podružnica Mostar | Alekse Šantića 11",
                  content: '<div>' +
                '<b>Podruznica Mostar</b>' +
                '<p>Adresa: <b>Alekse Šantića 11</b> <p>' +
                '<div>' +
                '<p>Tel: <b><a href="tel:+38736580039">(036)580-039</a></b></b></p>' +
                '<p>Radno vrijeme</p>' +
                '<p><b>Pon-Pet 07:30-15:30</b></p>' +
                '</div>' +
                '</div>'
              }
            ];
        }
    };
})