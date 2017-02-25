'use strict';
var map;
var mapStyle = [{
    "featureType": "administrative",
    "elementType": "labels.text.fill",
    "stylers": [{"color": "#444444"}]
}, {"featureType": "landscape", "elementType": "all", "stylers": [{"color": "#f2f2f2"}]}, {
    "featureType": "poi",
    "elementType": "all",
    "stylers": [{"visibility": "off"}]
}, {
    "featureType": "road",
    "elementType": "all",
    "stylers": [{"saturation": -100}, {"lightness": 45}]
}, {
    "featureType": "road.highway",
    "elementType": "all",
    "stylers": [{"visibility": "simplified"}]
}, {
    "featureType": "road.arterial",
    "elementType": "labels.icon",
    "stylers": [{"visibility": "off"}]
}, {"featureType": "transit", "elementType": "all", "stylers": [{"visibility": "off"}]}, {
    "featureType": "water",
    "elementType": "all",
    "stylers": [{"color": "#00bfa5"}, {"visibility": "on"}]
}];

function initMap() {

    map = new google.maps.Map(document.getElementById('google-map'), {
        center: {lat: 55.67337, lng: 37.28185},
        zoom: 8
    });
    map.setOptions({styles:mapStyle})
}
var asd = 'asdasdasd';