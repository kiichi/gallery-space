jQuery(function ($) {
   "use strict";
   if ($("#map").length) {
      function initialize() {
         var map = L.map('map').setView([40.7617552,-73.9682552], 13);
         L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
         }).addTo(map);
         var marker = L.marker([40.7617552,-73.9682552]).addTo(map);
         marker.bindPopup("<b>Gallery Space</b><br>Art Gallery on 3rd avenue & 60th street").openPopup();

         L.tileLayer.provider('Stadia.AlidadeSmooth').addTo(map); //https://leaflet-extras.github.io/leaflet-providers/preview/
      }
      google.maps.event.addDomListener(window, "load", initialize);
   }
});