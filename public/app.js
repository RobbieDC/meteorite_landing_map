var requestComplete = function() {
  console.log( "start of requestComplete function" );
  if(this.status !== 200) return;
  var jsonString = this.responseText;
  var meteoriteData = JSON.parse(jsonString);
  console.log(meteoriteData);
}

var makeRequest = function( url, callBack ) {
  var request = new XMLHttpRequest();
  request.open( "GET", url );
  console.log( this );
  request.onload = callBack;
  request.send();
}

var app = function() {
  var url = "https://data.nasa.gov/resource/y77d-th95.json?$where=mass > 99999";
  // makeRequest( url, requestComplete );
  initializeMap();
}

var initializeMap = function(){
  var centre = {lat: 51.507351, lng: -0.127758};
  var map = new Map(centre, 10);
  map.addMarker(centre);
  map.addClickEvent();
}

window.onload = app;
