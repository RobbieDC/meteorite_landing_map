var map;

var requestComplete = function() {
  if(this.status !== 200) return;
  var jsonString = this.responseText;
  var meteoriteData = JSON.parse(jsonString);
  var allMeteoriteLatLng = getAllMeteoriteLatLng(meteoriteData);
  var map = initializeMap();
  addMeteoriteLocationsToMap( allMeteoriteLatLng, map );
}

var makeRequest = function( url, callBack ) {
  var request = new XMLHttpRequest();
  request.open( "GET", url );
  request.onload = callBack;
  request.send();
}

var initializeMap = function(){
  var centre = { lat: 20, lng: 0 };
  map = new Map(centre, 2);
  map.addMarker(centre);
  return map;
}

var addMeteoriteLocationsToMap = function( meteoriteLocations, map ){
  for (var i = 0; i < meteoriteLocations.length; i++) {
    var meteoriteLat = meteoriteLocations[i].lat;
    var meteoriteLng = meteoriteLocations[i].lng;
    map.addMarker( meteoriteLat, meteoriteLng );
  }
}


var getAllMeteoriteLatLng = function(allMeteoriteData) {
  var allMeteoriteLatLng = []
  for(meteorite of allMeteoriteData) {
    if(meteorite.reclat && meteorite.reclong ) {
      var meteoriteLatLng = { lat: meteorite.reclat, lng: meteorite.reclong };
      allMeteoriteLatLng.push(meteoriteLatLng);
    }
  }
  return allMeteoriteLatLng;
}

var app = function() {
  var url = "https://data.nasa.gov/resource/y77d-th95.json?$where=mass > 99999";
  makeRequest( url, requestComplete );
}

window.onload = app;
