'use strict';
let map;
var gMarkers = [];

function init() {
  initMap();
  onMakePlace();
  addMarkers();
  renderTable();
}

function addMarkers() {
  var places = getPlaces();
  console.log(places);
  places.forEach((place) => {
    var marker = new google.maps.Marker({
      position: { lat: place.lat, lng: place.lng },
      map,
      title: place.name,
    });
    gMarkers.push(marker);
  });
}

function removeMarkers() {
  var markers = gMarkers;
  console.log(markers);
  google.maps.Map.prototype.clearOverlays = function () {
    for (var i = 0; i < markers.length; i++) {
      markers.setMap(null);
    }
  };
}

function onDeletePlace(placeId) {
  deletePlace(placeId);
}

function renderTable() {
  var elTable = document.querySelector('tbody');
  var places = getPlaces();
  var strHtml = ``;
  places.forEach((place) => {
    strHtml += `<tr>
        <td>${place.id}</td>
        <td>${place.name}</td>
        <td>${place.lat}</td>
        <td>${place.lng}</td>
        <td><button onclick="onDeletePlace('${place.id}')">delete</button></td>
    </tr>`;
  });
  elTable.innerHTML = strHtml;
}

function onMakePlace() {
  google.maps.event.addListener(map, 'click', function (event) {
    var name = prompt('Location name?');
    if (!name) return;
    var myLatLng = event.latLng;
    new google.maps.Marker({
      position: myLatLng,
      map,
      title: name,
    });
    var lat = myLatLng.lat();
    var lng = myLatLng.lng();
    makePlace(name, lat, lng);
  });
}

function initMap(lat = 29.566454, lng = 34.952685) {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat, lng },
    zoom: 12,
  });
  console.log(map);
}

function handleLocationError(error) {
  var locationError = document.getElementById('locationError');

  switch (error.code) {
    case 0:
      locationError.innerHTML =
        'There was an error while retrieving your location: ' + error.message;
      break;
    case 1:
      locationError.innerHTML =
        "The user didn't allow this page to retrieve a location.";
      break;
    case 2:
      locationError.innerHTML =
        'The browser was unable to determine your location: ' + error.message;
      break;
    case 3:
      locationError.innerHTML =
        'The browser timed out before retrieving the location.';
      break;
  }
}
