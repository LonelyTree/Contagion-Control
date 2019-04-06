    // I N F O   T A B ////////////////////////////////////////////////
    var toggle = true;
    var martial = true;
    var peop = true;
    var sci = true;
    var action = true;
    var guide = true;
    var refguide = true;
    var d1 = true;
    var solutions = true;
    $('#governmentwrap').hide()
    $('#populationwrap').hide()
    $('#scientistwrap').hide()
    // R E F   C O D E S ////////////////////////////////////////////////
    $('#refcodes').hide()
    // R E F   G U I D E ////////////////////////////////////////////////
    $('#refguide').hide()
    $('#smallpox').hide()
    // E M E R G E N C Y   S O L U T I O N S ////////////////////////////
    $('#emgsolutions').hide()
    // M A I N   T A B S /////////// C L I C K E D/////////////////////////////////////
    $('#martial').on('click', ()=>{
        if(martial === true){
        $('#martial').css('background',"coral")
            martial=false}
        else if(martial === false){
            $('#martial').css('background',"#e5f403cf")
            martial=true
        }
    $('#governmentwrap').toggle("slow")
    })
    $('#peop').on('click', ()=>{
        if(peop === true){
            $('#peop').css('background',"coral")
                peop=false}
            else if(peop === false){
                $('#peop').css('background',"#e5f403cf")
                peop=true
            }
        $('#populationwrap').toggle("slow")
    })
    $('#sci').on('click', ()=>{
        if(sci === true){
            $('#sci').css('background',"coral")
                sci=false}
            else if(sci === false){
                $('#sci').css('background',"#e5f403cf")
                sci=true
            }
        $('#scientistwrap').toggle("slow")
    })
    ///////////////   C D C   C O N T R O L  B T N S   ///////////////


////////////////////////  R E F   C O D E S  /////////////////////////
    $('#action').on('click',()=>{
        if(action === true){
            $('#action').css('background',"#e5f403cf")
                action=false}
            else if(action === false){
                $('#action').css('background',"#e5611c")
                action=true
            }
        $('#refcodes').toggle("slow")
    })
///////////////  R E F E R E N C E   G U I D E  /////////////
    $('#guide').on('click', ()=>{
        if(guide === true){
            $('#guide').css('background',"#e5f403cf")
                guide=false}
            else if(guide === false){
                $('#guide').css('background',"#e5611c")
                guide=true
            }
        $('#refguide').toggle("slow")
    })
///////////////  R E F E R E N C E   G U I D E  S U B  B U T N S /////////////
    $('#D1').on('click', ()=>{
        if(d1 === true){
            $('#D1').css('background',"coral")
                d1=false}
            else if(d1 === false){
                $('#D1').css('background',"#e5f403cf")
                d1=true
            }
        $('#smallpox').toggle()
    })
//////////////////////////  E M E R G E N C Y   S O L U T I O N S /////////////
    $('#solutions').on('click', ()=>{
            if(solutions === true){
                $('#solutions').css('background',"#000000").css("color","red")
                    solutions=false}
                else if(solutions === false){
                    $('#solutions').css('background',"#e5611c").css('color',"black")
                    solutions=true}
        $('#emgsolutions').toggle("slow")
    })

/////////// M O D A L   E M N B A C C  P R O T O C O L ////////////////////////////////////////////////////////
$('.saveearth li').click((e) => {
    var $sentence = " "
    var $target = $(e.target);
    $sentence = $target.children('.hide').text()
$('#end').trigger('click')
////// F A D E   E F F E C T /////////////
$("#end").modal({
    fadeDuration: 1100
})
////// T Y P I N G   E F F E C T //////////
$('#a1 p').text($sentence)

    var $el = $('#a1 p'),
        html = $el.html(),
        txt = $el.text(),
        txtLen = txt.length,
        timeOut,
        char = 0;

    $el.text('|');
setTimeout(function(){
(function typeIt() {
    var humanize = Math.round(Math.random() * (150 - 80)) + 30;
    timeOut = setTimeout(function () {
        char++;
        var type = html.substring(0, char);
        $el.html(type + '|');
        typeIt();
        if (char == txtLen) {
            $el.html($el.html().slice(0, -1)); // remove the '|'
            clearTimeout(timeOut);}

    }, humanize);}())
},2000);
    })
        
/////////// M O D A L S ////////////////////////////////////////////////////////
$('.codesdiv ul li').click((e) => {
    var $sentence = " "
    var $target = $(e.target);
    $sentence = $target.children('.hide').text()
$('#open').trigger('click')
////// F A D E   E F F E C T /////////////
$("#open").modal({
    fadeDuration: 500
})
////// T Y P I N G   E F F E C T //////////
$('#e1 p').text($sentence)

    var $el = $('#e1 p'),
        html = $el.html(),
        txt = $el.text(),
        txtLen = txt.length,
        timeOut,
        char = 0;

    $el.text('|');
setTimeout(function(){
(function typeIt() {
    var humanize = Math.round(Math.random() * (150 - 80)) + 30;
    timeOut = setTimeout(function () {
        char++;
        var type = html.substring(0, char);
        $el.html(type + '|');
        typeIt();
        if (char == txtLen) {
            $el.html($el.html().slice(0, -1)); // remove the '|'
            clearTimeout(timeOut);}

    }, humanize);}())
},1000);
    })

    // let i = 0;
    // let txt = ""; /* The text */
    // let speed = 50; /* The speed/duration of the effect in milliseconds */

    // function typeWriter(string) {
    //     if (i < string.length) {
    //         $("#e1 p").text($("#e1 p").text() += string.charAt(i));
    //         i++;
    //         setTimeout(typeWriter, speed);
    //     }
    // }
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

    "Allocate deployable bacterial disinfection sites"

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
-1 public unrest every turn -1 disease

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

Deploy roadblocks for high flow areas -1 disease

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
+1 cure -1 public unrest -1 desease

Train civilians to report infections
-1 public unrest per turn -1 disease

Hold television conference for community to voice concerns
-2 public unrest per turn

ENFORCE

Strict Curfew
+1 government and +1 public unrest per turn 

Military blockade of transport
+1 government and +1 public unrest per turn 0  Disease for that turn 

HAZMAT equipt tank column occupation
+2 government and +2 public unrest 0 Disease for that turn
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
