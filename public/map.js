var Map = function(center, zoom) {

  this.googleMap = new google.maps.Map(document.getElementById('map'), {
    center: center, 
    zoom: zoom 
  })

  this.addMarker = function(latLng) {
    var marker = new google.maps.Marker({
      position: latLng,
      map: this.googleMap
    });
  }

  this.addClickEvent = function() {
    google.maps.event.addListener(this.googleMap, 'click', function(event) {
      var position = {lat: event.latLng.lat(), lng: event.latLng.lng()}
      this.addMarker(position)
    }.bind(this));
  }

}
