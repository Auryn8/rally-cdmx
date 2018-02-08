alert("inicia");
  function initMap() {
    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: {lat: 19.345842, lng: -99.190678}
    });
    directionsDisplay.setMap(map);
  
    document.getElementById('submit').addEventListener('click', function() {
      calculateAndDisplayRoute(directionsService, directionsDisplay);
    });
  }
  
  function calculateAndDisplayRoute(directionsService, directionsDisplay) {
    var waypts = [];
    var checkboxArray = document.getElementById('waypoints');
    for (var i = 0; i < checkboxArray.length; i++) {
      if (checkboxArray.options[i].selected) {
        waypts.push({
          location: checkboxArray[i].value,
          stopover: true
        });
      }
    }
  
    directionsService.route({
      origin: document.getElementById('start').value,
      destination: document.getElementById('end').value,
      waypoints: waypts,
      optimizeWaypoints: true,
      travelMode: 'DRIVING'
    }, function(response, status) {
      if (status === 'OK') {
        directionsDisplay.setDirections(response);
        var route = response.routes[0];
        var summaryPanel = document.getElementById('directions-panel');
        summaryPanel.innerHTML = '';
        // For each route, display summary information.
        for (var i = 0; i < route.legs.length; i++) {
          var routeSegment = i + 1;
          summaryPanel.innerHTML += '<b>Route Segment: ' + routeSegment +
              '</b><br>';
          summaryPanel.innerHTML += route.legs[i].start_address + ' to ';
          summaryPanel.innerHTML += route.legs[i].end_address + '<br>';
          summaryPanel.innerHTML += route.legs[i].distance.text + '<br><br>';
        }
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }

/*Agrupación de marcadores en clústeres
Información general
En este instructivo se muestra la manera de usar clústeres de marcadores para mostrar una gran cantidad de marcadores en un mapa. Puedes usar la biblioteca MarkerClusterer junto con la Google Maps JavaScript API para combinar marcadores cercanos en clústeres y simplificar la representación de marcadores en el mapa.
El número de un clúster indica la cantidad de marcadores que contiene. Observa que, a medida que apliques zoom de acercamiento a cualquiera de las ubicaciones del clúster, el número de este disminuirá y empezarás a ver los marcadores individuales en el mapa. Al aplicar zoom de alejamiento al mapa, los marcadores se consolidarán nuevamente en clústeres.
Consulta: https://developers.google.com/maps/documentation/javascript/marker-clustering


function initMap() {

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 3,
    center: {lat: 19.345842,lng: -99.190678}
  });

  // Create an array of alphabetical characters used to label the markers.
  var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  // Add some markers to the map.
  // Note: The code uses the JavaScript Array.prototype.map() method to
  // create an array of markers based on a given "locations" array.
  // The map() method here has nothing to do with the Google Maps API.
  var markers = locations.map(function (location, i) {
    return new google.maps.Marker({
      position: location,
      label: labels[i % labels.length]
    });
  });

  // Add a marker clusterer to manage the markers.
  var markerCluster = new MarkerClusterer(map, markers, {
    imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
  });
}
var locations = [
  //1. Plaza del Carmen
  {lat: 19.345842, lng: -99.190678},
  //2. Biblioteca de las Revoluciones
  {lat: 19.345427, lng: -99.190976},
  //3. Casa del Mayorazgo de Fagoaga
  {lat: 19.345787, lng: -99.191766},
//4. Casa del Obispo
  {lat: 19.345247, lng: -99.193134},
//5. Parroquia San Jacinto
  {lat: 19.344696, lng: -99.193415},
//6. Plaza de los cielos 
  {lat: 19.344604, lng: -99.195254},
//7. La Casa Blanca  
  {lat: 19.344097, lng: -99.197042},
//8. Plaza de los Arcángeles 
  {lat: 19.343332, lng: -99.194487},
//9. Jardín del Arte
  {lat: 19.341863, lng: -99.192487},
//10. Plaza San Jacinto
  {lat: 19.344651, lng: -99.192291},
//11. Plaza Villa San Jacinto
  {lat: 19.344144, lng: -99.192582},
//12. Museo Casa del Risco
  {lat: 19.344946, lng: -99.191952},
//13. Centro Cultural San Ángel
  {lat: 19.345523, lng: -99.190378},
//14.  Templo del Carmen
  {lat: 19.345704, lng: -99.189633},
//15. Museo del Carmen
  {lat: 19.3519663, lng: -99.1864813},
      ]
*/