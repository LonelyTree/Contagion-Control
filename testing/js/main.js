    // I N F O   T A B
    var toggle = true;
    $('#governmentwrap').hide()
    $('#populationwrap').hide()
    $('#scientistwrap').hide()
    // R E F   C O D E S
    $('#refcodes').hide()
    // R E F   G U I D E
    $('#refguide').hide()
    $('#smallpox').hide()
    // M A I N   T A B S 
    $('#martial').on('click', ()=>{
        if(toggle === true){
            $('title').hide()
            toggle = false
        }
        $('#governmentwrap').toggle("slow")
    })
    $('#peop').on('click', ()=>{
        if(toggle === true){
            $('title').hide()
            toggle = false
        }
        $('#populationwrap').toggle("slow")
    })
    $('#sci').on('click', ()=>{
        if(toggle === true){
            $('title').hide()
            toggle = false
        }
        $('#scientistwrap').toggle("slow")
    })
    // C D C   C O N T R O L  B T N S 
    $('#action').on('click', ()=>{
        if(toggle === true){
            $('title').hide()
            toggle = false
        }
        $('#refcodes').toggle("slow")
    })
    $('#guide').on('click', ()=>{
        if(toggle === true){
            $('title').hide()
            toggle = false
        }
        $('#refguide').toggle("slow")
    })
                        $('#D1').on('click', ()=>{
                            if(toggle === true){
                                $('title').hide()
                                toggle = false
                            }
                            $('#smallpox').toggle()
                        })
    $('#solutions').on('click', ()=>{
        if(toggle === true){
            $('title').hide()
            toggle = false
        }
        $('#emgsolutions').toggle("slow")
    })
    // C D C   R E F  C O D E  L I B R A R Y

    // PROPPER FORMAT = 
    //CDCREF#1 = {desc: "Description of event here",
    //            type: "type of pathogen here",
    //            govern: "number of severity",
    //            public: "number of severity",
    //            cure: "number of severity"}
    // 
    //
    //
    //
    //             need function to check if government is used and if so, to add 
    //             public unrest every few turns

/*
    D E F I N E 
    

    VIRUS

    DISPATCH VIRAL SAMPLE AQISITION TEAM

    BACTERIA

    DISPATCH BARCTERIAL SAMPLE AQUISITION TEAM

    D E F I N E  - A L L

    Deploy field medics for contagion sample aquisition.

    L E S S E N

    VIRUS

    Distribute antiviral drugs.

    Dispersal of anti-viral cloud via helicopter.

    Deploy Viral Containment Team (VCT).

    BACTERIA

    "Allocate deployable disinfection sites"

    "Deploy sanitation M113APC for widespread disinfection"

    "Restock medical staff with anti-biotics"

    L E S S E N - A L L

    "Close bus routes."

    Shut-down subways.

    Shut down local gatherings.

    Distribute bottled water.

    Distribute deployable clinics.

    Distribute N95 particulate face masks.

    Increase flow of Doctors in ER.

    I N C R E A S E - A L L

    Hold city meeting to discuss disease.

    Allow important city festival to start

    Provide access to mobile atm platforms

    Distribute emergency rations AT CENTRAL LOCATION

*/
/*
P U B L I C 

CALM

Send out CDC representatives as community outreach and education.
-1 public unrest every turn

Deploy information fliers. 
-1 public unrest every two turns

Governor (double) tour through affected area
-3 public unrest

Install high-bandwith cell-towers
-2 public unrest +1 government

Provide access to mobile atm platforms
-2 public unrest +2 disease

RESTRAIN 
(no increase of public unrest for that turn, but +1 government)

Deploy military with all field medical staff

Deploy roadblocks for high flow areas

Increase HAZMAT equiped military enforcement

INCITE

Any military action will cause rioting the longer the disease goes uncured
+1 public unrest every two turns

Send false information about a cure. 
+3 public unrest in two turns

Kidnap people infected for further testing of cure
+3 cure +5 public unrest in two turns

*/     
/* 
G O V E R N M E N T

FOCUS
Train medical professionals in advanced care
+1 cure -1 public unrest

Train civilians to report infections
-1 public unrest per turn

Hold television conference for community to voice concerns
-1 public unrest per turn

ENFORCE

Strict Curfew
+1 government and +1 public unrest per turn

Military blockade of transport
+1 government and +1 public unrest per turn

HAZMAT equipt tank column occupation
+2 government and +2 public unrest
*/

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

// G O O G L E   M A P S    C I R C L E

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
