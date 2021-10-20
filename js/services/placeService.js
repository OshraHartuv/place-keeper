'use strict';

var gPlaces = getPlacesFromStorage() ? getPlacesFromStorage() : [];

function deletePlace(placeId){
    var idx = gPlaces.findIndex(place=>{
       return  placeId === place.id
    })
    removeMarkers()
    gPlaces.splice(idx,1)
    savePlacesToStorage()
    init()
}

function savePlacesToStorage() {
    saveToStorage('places', gPlaces);
}

function getPlacesFromStorage() {
    var places = loadFromStorage('places');
  return places;
}

function getPlaces() {
    return gPlaces;
}

function getPosition() {
    if (!navigator.geolocation) {
        alert('HTML5 Geolocation is not supported in your browser.');
        return;
    }
    
    navigator.geolocation.getCurrentPosition(showLocation, handleLocationError);
}

function showLocation(position) {
    console.log(position);
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    initMap(lat, lng);
}

function makePlace(name, lat, lng) {
    var place = {
        name,
        lat,
        lng,
        id: makeId(),
    };
    gPlaces.push(place);
    console.log(gPlaces);
    savePlacesToStorage();
    renderTable();
}

// function renderTable() {
    //   var elTable = document.querySelector('tbody');
    //   var places = getPlaces();
    //   var strHtml = ``;
    //   places.forEach((place) => {
        //     strHtml += `<tr>
        //       <td>${place.id}</td>
        //       <td>${place.name}</td>
        //       <td>${place.lat}</td>
        //       <td>${place.lng}</td>
        //       <td><button onclick="onDeletePlace(${place.id})">delete</button></td>
        //   </tr>`;
        //   });
        //   elTable.innerHTML = strHtml;
        // }
        // function addMapLister() {
            //   google.maps.event.addListener(map, 'click', function (event) {
                //     var name = prompt('Location name?');
                //     if (!name) return;
                //     var myLatLng = event.latLng;
                //     new google.maps.Marker({
                    //       position: myLatLng,
                    //       map,
                    //       title: name,
                    //     });
                    //     var lat = myLatLng.lat();
                    //     var lng = myLatLng.lng();
                    //     makePlace(name, lat, lng);
                    //   });
                    // }
                    
                    // function initMap(myLatlng = { lat: 29.566454, lng: 34.952685 }) {
                        //   // function initMap(lat= 29.566454, lng= 34.952685) {
                            //   map = new google.maps.Map(document.getElementById('map'), {
                                //     // center: { lat, lng },
                                //     center: myLatlng,
                                //     zoom: 12,
                                //   });
                                //   console.log(map);
                                // }
                                
                                
                                // function handleLocationError(error) {
                                    //   var locationError = document.getElementById('locationError');
                                    
                                    //   switch (error.code) {
                                        //     case 0:
                                        //       locationError.innerHTML =
                                        //         'There was an error while retrieving your location: ' + error.message;
                                        //       break;
                                        //     case 1:
                                        //       locationError.innerHTML =
                                        //         "The user didn't allow this page to retrieve a location.";
                                        //       break;
                                        //     case 2:
                                        //       locationError.innerHTML =
                                        //         'The browser was unable to determine your location: ' + error.message;
                                        //       break;
                                        //     case 3:
                                        //       locationError.innerHTML =
                                        //         'The browser timed out before retrieving the location.';
                                        //       break;
                                        //   }
                                        // }
                                        
                                        // var myLatlng = {lat: 29.566454, lng: 34.952685}
                                        
                                        // function init() {
                                        //   gPlaces = getPlacesFromStorage() ? getPlacesFromStorage() : [];
                                        //   initMap();
                                        //   addMapLister();
                                        //   addMarkers()
                                        //   renderTable()
                                        // }