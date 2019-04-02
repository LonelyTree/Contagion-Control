
        // This example creates circles on the map, representing populations in North
        // America.

        // First, create an object containing LatLng and population for each city.
src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBR0S-krTPd4hZ27aoWsRVGPvZ-LDY98zc&callback=initMap"
var citymap = {
chicago: {
    center: { lat: 41.878, lng: -87.629 },
},
newyork: {
    center: { lat: 40.714, lng: -74.005 },
},
losangeles: {
    center: { lat: 34.052, lng: -118.243 },
},
vancouver: {
    center: { lat: 49.25, lng: -123.1 },
}
};

function initMap() {
// Create the map.
var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10.25,
    center: { lat: 34.052, lng: -118.243  },
    mapTypeId: 'terrain'
});

// Construct the circle for each value in citymap.
// Note: We scale the area of the circle based on the population.
for (var city in citymap) {
    // Add the circle for this city to the map.
    var cityCircle = new google.maps.Circle({
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.35,
        map: map,
        center: citymap[city].center,
        radius: Math.sqrt(citymap[city].population) * 100
    });
}
}

const Css = require('json-to-css')
const json = require([
    {
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f5f5f5"
            }
        ]
    },
    {
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#616161"
            }
        ]
    },
    {
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#f5f5f5"
            }
        ]
    },
    {
        "featureType": "administrative.locality",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#8f0000"
            },
            {
                "weight": 8
            }
        ]
    },
    {
        "featureType": "administrative.locality",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#68611a"
            },
            {
                "lightness": 75
            },
            {
                "weight": 4
            }
        ]
    },
    {
        "featureType": "administrative.neighborhood",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#fdfffe"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#eeeeee"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#757575"
            }
        ]
    },
    {
        "featureType": "poi.government",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.government",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#8f0000"
            }
        ]
    },
    {
        "featureType": "poi.government",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#bdb126"
            }
        ]
    },
    {
        "featureType": "poi.medical",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.medical",
        "elementType": "labels.icon",
        "stylers": [
            {
                "color": "#ff2600"
            }
        ]
    },
    {
        "featureType": "poi.medical",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#8f0000"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.medical",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#423e04"
            },
            {
                "lightness": 75
            },
            {
                "visibility": "on"
            },
            {
                "weight": 6
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#969696"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#c1c1c1"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#dadada"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#065290"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#a9a9a9"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#e5e5e5"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#5e5e5e"
            }
        ]
    },
    {
        "featureType": "transit.station.airport",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#fffb00"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "transit.station.airport",
        "elementType": "labels.icon",
        "stylers": [
            {
                "color": "#ff2600"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#c9c9c9"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#b1d9fb"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#9e9e9e"
            }
        ]
    }
])
const css = Css.of(json)
console.log(css)