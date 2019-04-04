    // I N F O   T A B
    var toggle = true;
    $('#governmentwrap').hide()
    $('#population').hide()
    $('#scientist').hide()
    // S W I T C H   T A B S 
    $('#martial').on('click', ()=>{
        if(toggle === true){
            $('title').hide()
            toggle = false
        }
        $('#governmentwrap').toggle("slow")
        


        
    })
    

    // This example creates circles on the map, representing populations in North
    // America.
    // First, create an object containing LatLng and population for each city.
    //  C I T Y   L O G 
    var citymap = [
    {
        name: 'chicago',
        center: {lat: 41.878, lng: -87.629},
        area: 320,
        ringSize: 75
    },
    {   name: "newyork",
        center: {lat: 40.714, lng: -74.005},
        area: 302.6,
        ringSize: 120
    },
    {   name: "losangeles",
        center: {lat: 34.052, lng: -118.243},
        area: 468.57,
        ringSize: 240
    },
    {   name: "vancouver",
        center: {lat: 49.25, lng: -123.1},
        area: 1000,
        ringSize: 200
    },
    {   name: "houston",
        center: {lat: 29.76, lng: -95.36},
        area: 599.6,
        ringSize: 200
    },
    {   name: "toyko",
        center: {lat: 35.68, lng: 139.69},
        area: 1000,
        ringSize: 300
    },
    {   name: "jakarta",
        center: {lat: -6.17, lng: 106.86},
        area: 600.7,
        ringSize: 275	
    },
    {   name: "new orleans",
        center: {lat: 29.95, lng: -90.07},
        area: 169.4,
        ringSize: 70
    },
    {   name: "delhi",
        center: {lat: 28.63, lng: 77.23},
        area: 400,
        ringSize: 200
    },
    {   name: "manilla",
        center: {lat: 14.59, lng: 120.98},
        area: 420,
        ringSize: 200
    },
    {   name: "seoul",
        center: {lat: 37.56, lng: 126.97},
        area: 800,
        ringSize: 350
    },
    {   name: "beijing",
        center: {lat: 39.92, lng: 116.46},
        area: 1000,
        ringSize: 350
    }
];

const selectedCity = citymap[Math.floor(Math.random() * citymap.length)]


    function initMap() {
        // Create the map.
        var map = new google.maps.Map(document.getElementById('map'), {
            // zoom: (selectedCity.area <= 250) ? 14 : 10.25,
            zoom: (selectedCity.area <= 250) ? 13 : (selectedCity.area <= 350) ? 12 : (selectedCity.area <= 500) ? 11 : (selectedCity.area <= 750) ? 10.75 : (selectedCity.area <= 1000) ? 10 : 10.25,
            center: selectedCity.center,
            mapTypeId: 'terrain'
        });
    // for (var area in citymap){
    //     if(area <=250){
    //         map.zoom: 14
    //     }
    // }

    // Construct the circle for each value in citymap.
    // Note: We scale the area of the circle based on the population.
    
        // Add the circle for this city to the map.
        var cityCircle = new google.maps.Circle({
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.35,
        map: map,
        center: selectedCity.center,
        radius: (selectedCity.ringSize *10) 
        });
        var cityCircle1 = new google.maps.Circle({
            strokeColor: '#075290',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#075290',
            fillOpacity: 0.064,
            map: map,
            center: selectedCity.center,
            radius: (selectedCity.ringSize *100) 
            });
    }
