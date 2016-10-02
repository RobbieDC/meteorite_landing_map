var Map = function(center, zoom) {

  this.googleMap = new google.maps.Map(document.getElementById('map'), {
    center: center, 
    zoom: zoom 
  })

  this.addMarker = function(lat, lng) {
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(lat, lng),
      map: this.googleMap
    });
  }

}
