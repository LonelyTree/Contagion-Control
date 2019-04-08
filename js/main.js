    src="../mercator_projection.js.js"
    
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

    // C D C   R E F  C O D E  L I B R A R Y

    // PROPPER FORMAT = 
    //CDCREF#1 =  {type: "type of pathogen here",
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
+1 cure -1 public unrest -3 government -1 desease

Train civilians to report infections
-1 public unrest per turn  -1 government -1 disease

Hold television conference for community to voice concerns
-2 public unrest per turn -3 government

ENFORCE

Strict Curfew
+2 government and +1 public unrest per turn -3 disease

Military blockade of transport
+1 government and +1 public unrest per turn  -2 Disease

HAZMAT equipt tank column occupation
+2 government and +2 public unrest  -4 disease
*/
ordersArray = 
[
    //D E F I N E 

    // VIRUS
    {name:"A1REF",disease:0,public:0,government:0,cure:1, kind: "virus"},
    // BACTERIA
    {name:"A2REF",disease:0,public:0,government:0,cure:1, kind: "bacteria"},

    // D E F I N E -- A L L
    {name:"A3REF",disease:0,public:0,government:0,cure:1, kind:null},

    // L E S S E N   S P E C  D I S E A S E

    // VIRUS
    {name:"A4REF",disease:-1,public:0,government:0,cure:2, kind: "virus"},
    {name:"A6REF",disease:-1,public:0,government:1,cure:2, kind: "virus"},
    {name:"A8REF",disease:0,public:0,government:0,cure:2, kind:"virus"},

    // BACTERIA
    {name:"A5REF",disease:-1,public:0,government:0,cure:2, kind: "bacteria"},
    {name:"A7REF",disease:-1,public:0,government:0,cure:2, kind: "bacteria"},
    {name:"A9REF",disease:-1,public:0,government:0,cure:1, kind: "bacteria"},

    // L E S S E N - A L L   D I S E A S E S
    {name:"A10REF",disease:-1,public:-2,government:0,cure:1, kind:null},
    {name:"B1REF",disease:-1,public:-2,government:0,cure:1, kind:null},
    {name:"B2REF",disease:-3,public:-2,government:0,cure:1, kind:null},
    {name:"B3REF",disease:-1,public:-1,government:0,cure:0, kind:null},
    {name:"B4REF",disease:-1,public:-1,government:0,cure:2, kind:null},
    {name:"B5REF",disease:-3,public:-1,government:0,cure:1, kind:null},
    {name:"B6REF",disease:-2,public:-1,government:0,cure:2, kind:null},
    
    //I N C R E A S E - A L L   D I S E A S E S
    {name:"B7REF",disease:4,public:2,government:2,cure:0, kind:null},
    {name:"B8REF",disease:5,public:2,government:4,cure:0, kind:null},
    {name:"B9REF",disease:6,public:3,government:2,cure:0, kind:null},
    {name:"B10REF",disease:7,public:-1,government:4,cure:0, kind:null},
    
    // P U B L I C 

    // CALM
    {name:"PB1REF",disease:2,public:-5,government:0,cure:0, kind:null},
    {name:"PB2REF",disease:0,public:-4,government:3,cure:0, kind:null},
    {name:"PB4REF",disease:0,public:-2,government:1,cure:0, kind:null},
    {name:"PB5REF",disease:0,public:-2,government:0,cure:3, kind:null},
    {name:"PB9REF",disease:2,public:-2,government:0,cure:0, kind:null},

    // R E S T R A I N
    {name:"PB3REF",disease:0,public:-5,government:0,cure:0, kind:null}, // false info about cure
    {name:"PB6REF",disease:0,public:4,government:0,cure:3, kind:null},
    {name:"PB7REF",disease:-1,public:3,government:3,cure:0, kind:null},
    {name:"PB8REF",disease:-3,public:3,government:2,cure:1, kind:null},
    {name:"PB10REF",disease:-3,public:2,government:2,cure:2, kind:null},
    
    // G O V E R N M E N T

    // FOCUS
    {name:"GT1REF",disease:-3,public:-3,government:-3,cure:4, kind:null},
    {name:"GT3REF",disease:-3,public:0,government:0,cure:3, kind:null},
    {name:"GT4REF",disease:-3,public:-3,government:-2,cure:3, kind:null},


    // ENFORCE
    {name:"GT2REF",disease:-3,public:3,government:2,cure:0, kind:null},
    {name:"GT5REF",disease:-2,public:3,government:3,cure:0, kind:null},
    {name:"GT6REF",disease:-3,public:5,government:5,cure:0, kind:null},
    
    // E M E R G E N C Y   P R O T O C O L

    // E M E R G E N C Y   C O R R E C T I O N S
    {name:"EM2REF",disease:-20,public:10,government:7,cure:7, kind:null},
    {name:"EM3REF",disease:-15,public:10,government:10,cure:7, kind:null},
    {name:"EM5REF",disease:-20,public:20,government:20,cure:10, kind:null},

    // G A M E   E N D I N G  C H O I C E S
    {name:"EM1REF",disease:0,public:0,government:0,cure:0, kind:"end"},
    {name:"EM4REF",disease:0,public:0,government:0,cure:0, kind:"end"},
    {name:"EM6REF",disease:0,public:0,government:0,cure:0, kind:"end"},
    {name:"EM7REF",disease:0,public:0,government:0,cure:0, kind:"end"},
    {name:"EM8REF",disease:0,public:0,government:0,cure:0, kind:"end"},
]
//////////////   R E F   C O D E   S U B M I T   ////////////////////////////

$('#govsub').click(()=>{
    let orders = $('#gov').val()
    var index = ordersArray.findIndex(function(ref){
        return ref.name === orders
    })
diseaseCount += ordersArray[index].disease
publicUnrest += ordersArray[index].public
governmentAbility += ordersArray[index].government
cureCount += ordersArray[index].cure

})
//////////// T U R N   C O U N T ////////////////////////////////////////////
var turnCount = 0; // max is 10

//////////// T U R N   C O U N T ////////////////////////////////////////////
var cureCount = 0; // max is 20

//////////// D I S E A S E   C O U N T ////////////////////////////////////////////
var diseaseCount = 3; // max is 30 // every three numbers the disease counter goes up.

//////////// P U B L I C  U N R E S T  C O U N T ////////////////////////////////////////////
var publicUnrest = 0; // max is 30

//////////// G O V E R N M E N T   C O U N T ////////////////////////////////////////////
var governmentAbility = 0; // max is 30

///////////////////  C I T Y   L O G  ///////////////////////////////////////////
var citymap = [
    {   name: "newyork",
        center: {lat: 40.7595, lng: -73.904},
        area: 302.6,
        ringSize: 120
    },
    {   name: "losangeles",
        center: {lat: 34.052, lng: -118.243},
        area: 468.57,
        ringSize: 240
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
        center: {lat: -6.27, lng: 106.86},
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
        center: {lat: 14.62, lng: 121.10},
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

///////////////////  C H O O S E  T H E   C I T Y ////////////////////////////////////
var selectedCity = citymap[Math.floor(Math.random() * citymap.length)]


//////////// C I T Y  P O P U L A T I O N ////////////////////////////////////////////
var cityPopulation = (selectedCity.area + 2600) ** 2
//////////// D I S E A S E   S Y M P T O M   B I N ////////////////////////////////////////////
var symptoms = [];
//////////// D I S E A S E   L I B R A R Y  ////////////////////////////////////////////
var diseases = [
    {name: "CHIMERIC Smallpox",
    symptoms: {1: 'Malaise',
    2: 'Severe headache',
    3: 'Backache',
    4: 'Vomiting',
    5: 'Diarrhoea:',
    6: 'Sudden onset of high fever and agression',
    7: 'Widespread skin rash',
    8: 'Skin rash changed into raised bumps',
    9: 'Bumps changed into fluid filled blisters',
    10: 'Blisters have scabbed over'},
    infectionRate: (.45),
}

]
//////////// C H O O S E   D I S E A S E  ///////////////////////////////

// var randDisease = diseases[Math.floor(Math.random() * diseases.length-1)];
var randDisease = diseases[0];
///////////// A P P E A R A N C E  O F  S Y M P T O M S //////////////

var symptAppear = randDisease.symptoms[(diseaseCount / 3)]
var holder = []
holder.push(symptAppear)
symptoms.push(holder)

//////////////////// C O R E   L O G I C ////////////////////////////

///////////////    M A K I N G    W R O N G  C H O I C E S   ////////////////////////
if ((turnCount - diseaseCount) > 1 && (turnCount - diseaseCount) < 2){
    publicUnrest += 1
    governmentAbility +=2
} else if ((turnCount - diseaseCount) >= 2 && (turnCount - diseaseCount) <= 4){
    publicUnrest += 2
    governmentAbility +=2
} else if ((turnCount - diseaseCount) >= 5){
    publicUnrest += 5
    governmentAbility +=5
} 

///////////////   M A K I N G    R I G H T  C H O I C E S  ////////////////////////
if ((diseaseCount - turnCount) > 1 && (diseaseCount - turnCount) <=2){
    publicUnrest -= 1
    governmentAbility -= 1
    cureCount += 3
} else if ((diseaseCount - turnCount) > 2 && (diseaseCount - turnCount) <=4){
    publicUnrest -= 3
    governmentAbility -= 3
    cureCount += 5
} else if ((diseaseCount - turnCount) > 2 && (diseaseCount - turnCount) <=4){
    publicUnrest -= 5
    governmentAbility -= 4
    cureCount += 7
} 


///////////////   P U B L I C   U N R E S T  L V L  ////////////////////////
if ((publicUnrest) > 1 && (publicUnrest) <= 5){
    governmentAbility += 1
} else if ((publicUnrest) > 5 && (publicUnrest) <= 10){
    governmentAbility += 2
    diseaseCount += 1
} else if ((publicUnrest) > 10 && (publicUnrest) <= 20){
    governmentAbility += 3
    diseaseCount += 3
}   
///////////////   G O V E R N M E N T     L V L  ////////////////////////
if ((governmentAbility) > 1 && (governmentAbility) <= 5){
    publicUnrest += 1;
    cureCount += .5;
} else if ((governmentAbility) > 5 && (governmentAbility) <= 10){
    publicUnrest += 2
    cureCount += 1
} else if ((governmentAbility) > 10 && (governmentAbility) <= 20){
    publicUnrest += 3
    cureCount += 1
}   

///////////////////  M A K E   T H E  M A P ////////////////////////////////////
// var map;
// var pathogen;
// function pathGool(){ var pathogenTotal = [cityCircle1 = new google.maps.Circle({
//     strokeColor: '#075290',
//     strokeOpacity: 0.8,
//     strokeWeight: 2,
//     fillColor: '#075290',
//     fillOpacity: 0.064,
//     map: map,
//     center: selectedCity.center,
//     radius: (selectedCity.ringSize *100) 
//     }),
//     cityCircle = new google.maps.Circle({
//     strokeColor: '#FF0000',
//     strokeOpacity: 0.8,
//     strokeWeight: 2,
//     fillColor: '#FF0000',
//     fillOpacity: 0.35,
//     map: map,
//     center: selectedCity.center,
//     radius: (selectedCity.ringSize *10) 
//     })]
//     return pathogenTotal[0],pathogenTotal[1]
// }
// function toggleInfection() {
//     pathogen.setMap(pathogen.getMap() ? null : map);
//}
function initMap() {
    // Create the map.
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: (selectedCity.area <= 250) ? 13 : (selectedCity.area <= 350) ? 12 : (selectedCity.area <= 500) ? 11 : (selectedCity.area <= 750) ? 10.75 : (selectedCity.area <= 1000) ? 10 : 10.25,
        center: selectedCity.center,
        gestureHandling: "none",
        mapTypeId: 'terrain'
    });
// pathGool()

    // I N I T I A L   Z O N E
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
        // Q U A R A N T I N E  B O R D E R
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
//// S P R E A D  D I S E A S E //////// S P R E A D  D I S E A S E ///////////////////
//// S P R E A D  D I S E A S E //////// S P R E A D  D I S E A S E ///////////////////
//// S P R E A D  D I S E A S E //////// S P R E A D  D I S E A S E ///////////////////
//// S P R E A D  D I S E A S E //////// S P R E A D  D I S E A S E ///////////////////

        $('#govsub').click(()=>{
////////////////  S T A R T  G A M E ///////////////////////
////////////////  S T A R T  G A M E ///////////////////////
////////////////  S T A R T  G A M E ///////////////////////
    
    if(diseaseCount > 5 && diseaseCount <=7){
            for(let i=0; i < diseaseCount; i++){
            selectedCity.center = selectedCity.center
        randomLat = [Math.random() * (-0.030 - 0.0200) -.099,
                    Math.random() * (-0.020 - 0.0100) -.08,
                    Math.random() * (-0.0120 - 0.005) - .04,
                    Math.random() * (-0.0020 - 0.000) - .02,
                    Math.random() * (0 - 0) +0,
                    Math.random() * (0.030 + 0.0200) + .099,
                    Math.random() * (0.020 + 0.0100)+ .08,
                    Math.random() * (0.0120 + 0.005)+ .04,
                    Math.random() * (0.0020 + 0.000) + .02]
        randLatPick = randomLat[Math.floor(Math.random()*randomLat.length-1)+0]

        randomLng = [Math.random() * (-0.030 - 0.0200) -.099,
                    Math.random() * (-0.020 - 0.0100) -.08,
                    Math.random() * (-0.0120 - 0.005) - .04,
                    Math.random() * (-0.0020 - 0.000) - .02,
                    Math.random() * (0 - 0) +0,
                    Math.random() * (0.030 + 0.0200) + .099,
                    Math.random() * (0.020 + 0.0100)+ .08,
                    Math.random() * (0.0120 + 0.005)+ .04,
                    Math.random() * (0.0020 + 0.000) + .02]
        randLngPick = randomLng[Math.floor(Math.random()*randomLng.length)+0]
        if(selectedCity.area < 310 && selectedCity.area > 200){
            randLngPick=(randLngPick/1.85), randLatPick= (randLatPick/1.85)
        }else if(selectedCity.area < 200){
            randLngPick=(randLngPick/3), randLatPick= (randLatPick/3)
        }else if(selectedCity.area >= 1000){
            randLngPick=(randLngPick * 1.4), randLatPick= (randLatPick * 1.4)
        }else if(selectedCity.area < 1000 && selectedCity.area >= 800){
            randLngPick=(randLngPick*1.38), randLatPick= (randLatPick*1.38)
        }else if(selectedCity.area < 700 && selectedCity.area >= 599){
            randLngPick=(randLngPick/1.2), randLatPick= (randLatPick/1.2)
        } else if(selectedCity.area < 420 && selectedCity.area >= 390){
            randLngPick=(randLngPick/1.2), randLatPick= (randLatPick/1.2)
        }
        
        
        // lat =Math.random() * (0.0120 - 0.0100);
        // lng =Math.random() * (0.0120 + 0.0100);
        console.log(randLatPick,randLngPick);
        let cityCircle0 = new google.maps.Circle({
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.35,
        map: map,
        center: {lat:(selectedCity.center.lat + randLatPick),lng:(selectedCity.center.lng + randLngPick)},
        // {lat:(selectedCity.center.lat += lat),lng:(selectedCity.center.lng += lng)},
        radius: (selectedCity.area * (Math.random()*(4-2)))
        })};
////////////////  M I D D L E  G A M E ///////////////////////
////////////////  M I D D L E  G A M E ///////////////////////
////////////////  M I D D L E  G A M E ///////////////////////
    }else if (diseaseCount > 9 && diseaseCount <=15){
        for(let i=0; i < diseaseCount; i++){
            selectedCity.center = selectedCity.center
        randomLat = [Math.random() * (-0.030 - 0.0200) -.099,
                    Math.random() * (-0.020 - 0.0100) -.08,
                    Math.random() * (-0.0120 - 0.005) - .04,
                    Math.random() * (-0.0020 - 0.000) - .02,
                    Math.random() * (0 - 0) +0,
                    Math.random() * (0.030 + 0.0200) + .099,
                    Math.random() * (0.020 + 0.0100)+ .08,
                    Math.random() * (0.0120 + 0.005)+ .04,
                    Math.random() * (0.0020 + 0.000) + .02]
        randLatPick = randomLat[Math.floor(Math.random()*randomLat.length-1)+0]

        randomLng = [Math.random() * (-0.030 - 0.0200) -.099,
                    Math.random() * (-0.020 - 0.0100) -.08,
                    Math.random() * (-0.0120 - 0.005) - .04,
                    Math.random() * (-0.0020 - 0.000) - .02,
                    Math.random() * (0 - 0) +0,
                    Math.random() * (0.030 + 0.0200) + .099,
                    Math.random() * (0.020 + 0.0100)+ .08,
                    Math.random() * (0.0120 + 0.005)+ .04,
                    Math.random() * (0.0020 + 0.000) + .02]
        randLngPick = randomLng[Math.floor(Math.random()*randomLng.length)+0]
        if(selectedCity.area < 310 && selectedCity.area > 200){
            randLngPick=(randLngPick/1.85), randLatPick= (randLatPick/1.85)
        }else if(selectedCity.area < 200){
            randLngPick=(randLngPick/3), randLatPick= (randLatPick/3)
        }else if(selectedCity.area >= 1000){
            randLngPick=(randLngPick * 1.4), randLatPick= (randLatPick * 1.4)
        }else if(selectedCity.area < 1000 && selectedCity.area >= 800){
            randLngPick=(randLngPick*1.38), randLatPick= (randLatPick*1.38)
        }else if(selectedCity.area < 700 && selectedCity.area >= 599){
            randLngPick=(randLngPick/1.2), randLatPick= (randLatPick/1.2)
        } else if(selectedCity.area < 420 && selectedCity.area >= 390){
            randLngPick=(randLngPick/1.2), randLatPick= (randLatPick/1.2)
        }
        
        
        // lat =Math.random() * (0.0120 - 0.0100);
        // lng =Math.random() * (0.0120 + 0.0100);
        console.log(randLatPick,randLngPick);
        let cityCircle0 = new google.maps.Circle({
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.35,
        map: map,
        center: {lat:(selectedCity.center.lat + randLatPick),lng:(selectedCity.center.lng + randLngPick)},
        // {lat:(selectedCity.center.lat += lat),lng:(selectedCity.center.lng += lng)},
        radius: (selectedCity.area * (Math.random()*(4-2)))
        })};
////////////////  N E A R  E N D   G A M E ///////////////////////
////////////////  N E A R  E N D   G A M E ///////////////////////
////////////////  N E A R  E N D   G A M E ///////////////////////

    }else if(diseaseCount > 16 && diseaseCount <=23){
        for(let i=0; i < diseaseCount; i++){
            selectedCity.center = selectedCity.center
        randomLat = [Math.random() * (-0.030 - 0.0200) -.099,
                    Math.random() * (-0.020 - 0.0100) -.08,
                    Math.random() * (-0.0120 - 0.005) - .04,
                    Math.random() * (-0.0020 - 0.000) - .02,
                    Math.random() * (0 - 0) +0,
                    Math.random() * (0.030 + 0.0200) + .099,
                    Math.random() * (0.020 + 0.0100)+ .08,
                    Math.random() * (0.0120 + 0.005)+ .04,
                    Math.random() * (0.0020 + 0.000) + .02]
        randLatPick = randomLat[Math.floor(Math.random()*randomLat.length-1)+0]

        randomLng = [Math.random() * (-0.030 - 0.0200) -.099,
                    Math.random() * (-0.020 - 0.0100) -.08,
                    Math.random() * (-0.0120 - 0.005) - .04,
                    Math.random() * (-0.0020 - 0.000) - .02,
                    Math.random() * (0 - 0) +0,
                    Math.random() * (0.030 + 0.0200) + .099,
                    Math.random() * (0.020 + 0.0100)+ .08,
                    Math.random() * (0.0120 + 0.005)+ .04,
                    Math.random() * (0.0020 + 0.000) + .02]
        randLngPick = randomLng[Math.floor(Math.random()*randomLng.length)+0]
        if(selectedCity.area < 310 && selectedCity.area > 200){
            randLngPick=(randLngPick/1.85), randLatPick= (randLatPick/1.85)
        }else if(selectedCity.area < 200){
            randLngPick=(randLngPick/3), randLatPick= (randLatPick/3)
        }else if(selectedCity.area >= 1000){
            randLngPick=(randLngPick * 1.4), randLatPick= (randLatPick * 1.4)
        }else if(selectedCity.area < 1000 && selectedCity.area >= 800){
            randLngPick=(randLngPick*1.38), randLatPick= (randLatPick*1.38)
        }else if(selectedCity.area < 700 && selectedCity.area >= 599){
            randLngPick=(randLngPick/1.2), randLatPick= (randLatPick/1.2)
        } else if(selectedCity.area < 420 && selectedCity.area >= 390){
            randLngPick=(randLngPick/1.2), randLatPick= (randLatPick/1.2)
        }
        
        
        // lat =Math.random() * (0.0120 - 0.0100);
        // lng =Math.random() * (0.0120 + 0.0100);
        console.log(randLatPick,randLngPick);
        let cityCircle0 = new google.maps.Circle({
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.35,
        map: map,
        center: {lat:(selectedCity.center.lat + randLatPick),lng:(selectedCity.center.lng + randLngPick)},
        // {lat:(selectedCity.center.lat += lat),lng:(selectedCity.center.lng += lng)},
        radius: (selectedCity.area * (Math.random()*(4-2)))
        })};
////////////////  E N D   G A M E ///////////////////////
////////////////  E N D   G A M E ///////////////////////
////////////////  E N D   G A M E ///////////////////////
    }else if(diseaseCount > 23){
        for(let i=0; i < diseaseCount; i++){
            selectedCity.center = selectedCity.center
        randomLat = [Math.random() * (-0.030 - 0.0200) -.099,
                    Math.random() * (-0.020 - 0.0100) -.08,
                    Math.random() * (-0.0120 - 0.005) - .04,
                    Math.random() * (-0.0020 - 0.000) - .02,
                    Math.random() * (0 - 0) +0,
                    Math.random() * (0.030 + 0.0200) + .099,
                    Math.random() * (0.020 + 0.0100)+ .08,
                    Math.random() * (0.0120 + 0.005)+ .04,
                    Math.random() * (0.0020 + 0.000) + .02]
        randLatPick = randomLat[Math.floor(Math.random()*randomLat.length-1)+0]

        randomLng = [Math.random() * (-0.030 - 0.0200) -.099,
                    Math.random() * (-0.020 - 0.0100) -.08,
                    Math.random() * (-0.0120 - 0.005) - .04,
                    Math.random() * (-0.0020 - 0.000) - .02,
                    Math.random() * (0 - 0) +0,
                    Math.random() * (0.030 + 0.0200) + .099,
                    Math.random() * (0.020 + 0.0100)+ .08,
                    Math.random() * (0.0120 + 0.005)+ .04,
                    Math.random() * (0.0020 + 0.000) + .02]
        randLngPick = randomLng[Math.floor(Math.random()*randomLng.length)+0]
        if(selectedCity.area < 310 && selectedCity.area > 200){
            randLngPick=(randLngPick/1.85), randLatPick= (randLatPick/1.85)
        }else if(selectedCity.area < 200){
            randLngPick=(randLngPick/3), randLatPick= (randLatPick/3)
        }else if(selectedCity.area >= 1000){
            randLngPick=(randLngPick * 1.4), randLatPick= (randLatPick * 1.4)
        }else if(selectedCity.area < 1000 && selectedCity.area >= 800){
            randLngPick=(randLngPick*1.38), randLatPick= (randLatPick*1.38)
        }else if(selectedCity.area < 700 && selectedCity.area >= 599){
            randLngPick=(randLngPick/1.2), randLatPick= (randLatPick/1.2)
        } else if(selectedCity.area < 420 && selectedCity.area >= 390){
            randLngPick=(randLngPick/1.2), randLatPick= (randLatPick/1.2)
        }
        
        
        // lat =Math.random() * (0.0120 - 0.0100);
        // lng =Math.random() * (0.0120 + 0.0100);
        console.log(randLatPick,randLngPick);
        let cityCircle0 = new google.maps.Circle({
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.35,
        map: map,
        center: {lat:(selectedCity.center.lat + randLatPick),lng:(selectedCity.center.lng + randLngPick)},
        // {lat:(selectedCity.center.lat += lat),lng:(selectedCity.center.lng += lng)},
        radius: (selectedCity.area * (Math.random()*(4-2)))
        })};

    }
    }
    )
    }

// function initMap() {
//     // Create the map.
//     var map = new google.maps.Map(document.getElementById('map'), {
//         // zoom: (selectedCity.area <= 250) ? 14 : 10.25,
//         zoom: (selectedCity.area <= 250) ? 13 : (selectedCity.area <= 350) ? 12 : (selectedCity.area <= 500) ? 11 : (selectedCity.area <= 750) ? 10.75 : (selectedCity.area <= 1000) ? 10 : 10.25,
//         center: selectedCity.center,
//         gestureHandling: "none",
//         mapTypeId: 'terrain'
//     });

    
// G O O G L E   M A P S    C I R C L E
// heatmapData = [
//     new google.maps.LatLng(selectedCity.center)
// ]
//     // Construct the circle for each value in citymap.
//     // Note: We scale the area of the circle based on the population.
//     var heatmap = new google.maps.visualization.HeatmapLayer({
//         dissipating: true,
//         radius: 60,
//         data: heatmapData,
//         map: map
//     });

// function changeGradient() {
//     var gradient = [
//         'rgba(0, 255, 255, 0)',
//         'rgba(0, 255, 255, 1)',
//         'rgba(0, 191, 255, 1)',
//         'rgba(0, 127, 255, 1)',
//         'rgba(0, 63, 255, 1)',
//         'rgba(0, 0, 255, 1)',
//         'rgba(0, 0, 223, 1)',
//         'rgba(0, 0, 191, 1)',
//         'rgba(0, 0, 159, 1)',
//         'rgba(0, 0, 127, 1)',
//         'rgba(63, 0, 91, 1)',
//         'rgba(127, 0, 63, 1)',
//         'rgba(191, 0, 31, 1)',
//         'rgba(255, 0, 0, 1)'
//     ]
//     heatmap.set('gradient', heatmap.get('gradient') ? null : gradient);
// }

// function changeRadius() {
//     heatmap.set('radius', heatmap.get('radius') ? null : 3000);
// }

// function changeOpacity() {
//     heatmap.set('opacity', heatmap.get('opacity') ? null : 0.2);
// }
    
// }
        // Add the circle for this city to the map.
    //     var cityCircle = new google.maps.Circle({
    //     strokeColor: '#FF0000',
    //     strokeOpacity: 0.8,
    //     strokeWeight: 2,
    //     fillColor: '#FF0000',
    //     fillOpacity: 0.35,
    //     map: map,
    //     center: selectedCity.center,
    //     radius: (selectedCity.ringSize *10) 
    //     });
    //     var cityCircle1 = new google.maps.Circle({
    //     strokeColor: '#075290',
    //     strokeOpacity: 0.8,
    //     strokeWeight: 2,
    //     fillColor: '#075290',
    //     fillOpacity: 0.064,
    //     map: map,
    //     center: selectedCity.center,
    //     radius: (selectedCity.ringSize *100) 
    //     });
    // }

///////////////  S P R E A D  I N F E C T I O N ///////////////////

// switch(diseaseCount){
//     case (diseaseCount >5 && diseaseCount <=7):

//         let cityCircle3 = new google.maps.Circle({
//             strokeColor: '#FF0000',
//             strokeOpacity: 0.8,
//             strokeWeight: 2,
//             fillColor: '#FF0000',
//             fillOpacity: 0.35,
//             map: map,
//             center: (selectedCity.center.lat += Math.floor(Math.random()*1)-.5 , selectedCity.center.lon += Math.floor(Math.random()*1)-.5),
//             radius: (selectedCity.ringSize *10) 
//             });
// }