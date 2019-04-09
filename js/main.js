    src="../mercator_projection.js.js"
    // submit button 319
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
    var solutionsEnabled = false
    
    $('#governmentwrap').hide()
    $('#populationwrap').hide()
    $('#scientistwrap').hide()
    // R E F   C O D E S ////////////////////////////////////////////////
    $('#refcodes').hide()
    // R E F   G U I D E ////////////////////////////////////////////////
    $('#refguide').hide()
    $('#smallpox').hide()
    // E M E R G E N C Y   S O L U T I O N S ////////////////////////////
    $('#solutions');
    $('#emgsolutions').hide()
    // M A I N   T A B S /////////// C L I C K E D/////////////////////////////////////
    $('#martial').on('click', ()=>{
        if(martial === true){
        $('#martial').css('background',"coral")
            martial=false
            $('#governmentwrap').toggle("slow")
        }
        else if(martial === false){
            $('#martial').css('background',"#e5f403cf")
            martial=true
            $('#governmentwrap').toggle("slow")
        }
        // if(peop === false){
        //     people = true
        //     $('#populationwrap').toggle('slow')
        // }
        // if(sci === false){
        //     sci = true
        //     $('#scientistwrap').toggle('slow')
        // }
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
////////////////  E M E R G E N C Y   S O L U T I O N S ///////////////////////
    if(solutionsEnabled === false){
        $('#solutions').css('background','grey')
    }
    $('#solutions').on('click', ()=>{
///////////// S T A R T  M O D A L ///////////// S T A R T  M O D A L
///////////// S T A R T  M O D A L ///////////// S T A R T  M O D A L
///////////// S T A R T  M O D A L ///////////// S T A R T  M O D A L
        if(solutionsEnabled === false){
            $('#end').trigger('click')
        ////// F A D E   E F F E C T /////////////
        $("#end").modal({
            fadeDuration: 1100
        })
        ////// T Y P I N G   E F F E C T //////////
        $('#a1 p').text("NBACC//##~ UNAUTHORIZED ACCESS//##~ TERMINATING LINK")
        
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
///////////// E N D  M O D A L ///////////// E N D  M O D A L
///////////// E N D  M O D A L ///////////// E N D  M O D A L
///////////// E N D  M O D A L ///////////// E N D  M O D A L
        };
            if(solutions === true && solutionsEnabled === true){
                $('#solutions').css('background',"#000000").css("color","red")
                    solutions=false
                    $('#emgsolutions').toggle("slow")}
                else if(solutions === false && solutionsEnabled === true){
                    $('#solutions').css('background',"red").css('color',"black")
                    solutions=true
                    $('#emgsolutions').toggle("slow")}
        
    })

/////////// M O D A L   E M N B A C C  P R O T O C O L ////////////////////////////////


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

// E V E N T S  L I B R A R Y //// E V E N T S  L I B R A R Y //// E V E N T S  L I B 
// E V E N T S  L I B R A R Y //// E V E N T S  L I B R A R Y //// E V E N T S  L I B 
// E V E N T S  L I B R A R Y //// E V E N T S  L I B R A R Y //// E V E N T S  L I B 

$ordersArray = 
[
    //D E F I N E  

    // VIRUS
    {name:"A1REF",disease:0,public:0,government:0,cure:1, kind: "virus"},
    // BACTERIA
    {name:"A2REF",disease:0,public:0,government:0,cure:1, kind: "bacteria"},

    // D E F I N E -- A L L
    {name:"A3REF",disease:0,public:0,government:0,cure:1, kind:"good"},

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
    {name:"A10REF",disease:-1,public:-2,government:0,cure:1, kind:"good"},
    {name:"B1REF",disease:-1,public:-2,government:0,cure:1, kind:"good"},
    {name:"B2REF",disease:-3,public:-2,government:0,cure:1, kind:"great"},
    {name:"B3REF",disease:-1,public:-1,government:0,cure:0, kind:"good"},
    {name:"B4REF",disease:-1,public:-1,government:0,cure:2, kind:"good"},
    {name:"B5REF",disease:-3,public:-1,government:0,cure:1, kind:"good"},
    {name:"B6REF",disease:-2,public:-1,government:0,cure:2, kind:"good"},
    
    //I N C R E A S E - A L L   D I S E A S E S
    {name:"B7REF",disease:4,public:2,government:2,cure:0, kind:"horrible"},
    {name:"B8REF",disease:5,public:2,government:4,cure:0, kind:"horrible"},
    {name:"B9REF",disease:6,public:3,government:2,cure:0, kind:"horrible"},
    {name:"B10REF",disease:7,public:-1,government:4,cure:0, kind:"horrible"},
    
    // P U B L I C 

    // CALM
    {name:"P1REF",disease:2,public:-5,government:0,cure:0, kind:"bad"},
    {name:"P2REF",disease:0,public:-4,government:3,cure:0, kind:"good"},
    {name:"P4REF",disease:0,public:-2,government:1,cure:0, kind:"good"},
    {name:"P5REF",disease:0,public:-2,government:0,cure:3, kind:"good"},
    {name:"P9REF",disease:2,public:-2,government:0,cure:0, kind:"bad"},
    // R E S T R A I N
    {name:"P3REF",disease:0,public:-5,government:0,cure:0, kind:"good"}, // false info about cue
    {name:"P6REF",disease:0,public:4,government:0,cure:3, kind:"horrible"},
    {name:"P7REF",disease:-1,public:3,government:3,cure:0, kind:"none"},
    {name:"P8REF",disease:-3,public:3,government:2,cure:1, kind:"none"},
    {name:"P10REF",disease:-3,public:2,government:2,cure:2, kind:"none"},
    {name:"P11REF",disease:-6,public:2,government:2,cure:5, kind:"great"},
    // G O V E R N M E N T

    // FOCUS
    {name:"GT1REF",disease:-3,public:-3,government:-3,cure:4, kind:"great"},
    {name:"GT3REF",disease:-3,public:0,government:0,cure:3, kind:"great"},
    {name:"GT4REF",disease:-3,public:-3,government:-2,cure:3, kind:"great"},


    // ENFORCE
    {name:"GT2REF",disease:-3,public:3,government:2,cure:0, kind:"good"},
    {name:"GT5REF",disease:-2,public:3,government:3,cure:0, kind:"good"},
    {name:"GT6REF",disease:-3,public:5,government:5,cure:0, kind:"horrible"},
    
    // E M E R G E N C Y   P R O T O C O L

    // E M E R G E N C Y   C O R R E C T I O N S
    {name:"EM2REF",disease:-20,public:10,government:7,cure:7, kind:"horrible"},
    {name:"EM3REF",disease:-15,public:10,government:10,cure:7, kind:"horrible"},
    {name:"EM5REF",disease:-20,public:20,government:20,cure:10, kind:"horrible"},

    // G A M E   E N D I N G  C H O I C E S
    {name:"EM1REF",disease:0,public:0,government:0,cure:0, kind:"end"},
    {name:"EM4REF",disease:0,public:0,government:0,cure:0, kind:"end"},
    {name:"EM6REF",disease:0,public:0,government:0,cure:0, kind:"end"},
    {name:"EM7REF",disease:0,public:0,government:0,cure:0, kind:"end"},
    {name:"EM8REF",disease:0,public:0,government:0,cure:0, kind:"end"},
]

// E N D  E V E N T S  L I B R A R Y //// E V E N T S  L I B R A R Y //// E V E N T S  
// E N D  E V E N T S  L I B R A R Y //// E V E N T S  L I B R A R Y //// E V E N T S  
// E N D  E V E N T S  L I B R A R Y //// E V E N T S  L I B R A R Y //// E V E N T S  


//////////////   R E F   C O D E   S U B M I T   ////////////////////////////
//////////////   R E F   C O D E   S U B M I T   ////////////////////////////
//////////////   R E F   C O D E   S U B M I T   ////////////////////////////


$('#govsub').click(()=>{
    let $orders = $('#gov').val()
    infectedNum = infected * 10
    var index = $ordersArray.findIndex(function(ref){
        return ref.name === $orders
    })

////  C O N S T.  V A R I A B L E S ////////
turnCount++
turnArray.push(randDisease.symptoms[(turnCount-1)])//pushes right symptom per turn to array
infectPopulation() 
fateOfCity() 
saveearth() 

////////////// P O P O U L A T I O N //////////////////
$('#hpop').text(cityPopulation)
$('#ipop').text(infected)

//// D E P E N D A N T   V A R I A B L E S ////
diseaseCount += $ordersArray[index].disease
publicUnrest += $ordersArray[index].public
govtolerance += $ordersArray[index].government
cureCount += $ordersArray[index].cure
///////////// A P P E A R A N C E  O F  S Y M P T O M S //////////////
showsympt()

//////////////  D I S E A S E  C O R O L A T I O N  ////////////////////////////
if($ordersArray[index].kind === randDisease.type){
    // This is where we tell them that their decsion was good and the desease has slowed down!
}
else if($ordersArray[index].kind === "good"){
    // Tell them that their choice has had a relatively good impact on the state of things!
}else if($ordersArray[index].kind === "bad"){
    // Tell them that their choice was not in the best interest of the health of the public
}else if($ordersArray[index].kind === "horrible"){
    // Tell them that they may have doomed the city
} else if($ordersArray[index].kind === "great"){
    // Tell them that they should recieve a commendation for their wonderful efforts!
}else if($ordersArray[index].kind === "none"){
    // Tell them that sometimes evils are neccessary.
}else if (if$ordersArray[index].kind != randDisease.type){
    // This is where we tell them that their decision did nothing to stop the disease from spreading! Look into the reference guide for further research!
}

//////////////   P R O G R E S S   B A R S  ////////////////////////////
//#cureprogress
$('#cureprogress').val(cureCount)
//#infectprogress
$('#infectprogress').val(diseaseCount)
//#peoptolerance
$('#peoptolerance').val(publicUnrest)
//#govtolerance
$('#govtolerance').val(govtolerance)

//////////////  R E M O V E   I N P U T  &  R E F  C O D E ////////////////////
//////////////  R E M O V E   I N P U T  &  R E F  C O D E ////////////////////
//////////////  R E M O V E   I N P U T  &  R E F  C O D E ////////////////////
$(`li:contains(${$orders})`).hide()
$('#gov').val("");

//////////////  E N D  R E M O V E   I N P U T  &  R E F  C O D E ////////////////////
//////////////  E N D  R E M O V E   I N P U T  &  R E F  C O D E ////////////////////
//////////////  E N D  R E M O V E   I N P U T  &  R E F  C O D E ////////////////////




// TO DO:

// include function that runs all the core logic 
//C O M P L E T E 

// remove the code that was input from #gov from screen once submit is clicked
// C O M P L E T E

// remove the code from the buttons on the options
// C O M P L E T E 

// don't make PROTOCOL available until disease > 26 
// C O M P L E T E 

// create the diologue box in which we can see the events happening

//connect the progress bars 
// C O M P L E T E 

// make function that calculates infectivity and pushes it to the name. 
//  C O M P L E T E 

//  fine tune circle appearances.
// C O M P L E T E 

// Make modal for winning with cure reaching 100%

// Make modal for failure with population reaching 0.

// Make reactionary events for government (5)  population (5) and science (3)

// show symptoms as they appear
// C O M P L E T E

// show symptoms on window as they appear

// corrolate decisions based on disease type 
// C O M P L E T E 

// give ability to diagnose and start on cure



// 
})
//////////////  E N D   R E F   C O D E   S U B M I T   ////////////////////////////
//////////////  E N D   R E F   C O D E   S U B M I T   /////////////////////////////////////////////  E N D   R E F   C O D E   S U B M I T   ////////////////////////////

////////////// C U R E  D I S T R I B U T E D /////////////////////
////////////// C U R E  D I S T R I B U T E D /////////////////////
////////////// C U R E  D I S T R I B U T E D /////////////////////

var distroCure = function (){
    if(cureCount >= 25){
        $('#endtext').trigger('click')
        ////// F A D E   E F F E C T /////////////
        $("#endtext").modal({
            fadeDuration: 1100
        })
        ////// T Y P I N G   E F F E C T //////////
        $('#b1 p').text()




////////////// E N D  C U R E  D I S T R I B U T E D /////////////////////
////////////// E N D  C U R E  D I S T R I B U T E D /////////////////////
////////////// E N D  C U R E  D I S T R I B U T E D /////////////////////

//////////////  S A V E   E A R T H  P R O T O C O L ///////////////
//////////////  S A V E   E A R T H  P R O T O C O L ///////////////
//////////////  S A V E   E A R T H  P R O T O C O L ///////////////

var saveearth = function (){
    if(diseaseCount > 35){
        solutionsEnabled = true
        $('#endtext').trigger('click')
        ////// F A D E   E F F E C T /////////////
        $("#endtext").modal({
            fadeDuration: 1100
        })
        ////// T Y P I N G   E F F E C T //////////
        $('#b1 p').text(`
ALERT: .....INCOMING MESSAGE.......
  READING ENCRYPTED FILES>>>>>>>>>>
........STARTING TRANSMISSION.......
....................................
     _  __ DIRECT __ FROM __ _____
    / |/ // _ ) / _ | / ___// ___/
   /    // _  |/ __ |/ /__ / /__  
  /_/|_//____//_/ |_|\\___/ \\___/
  
  
    National Biodefense Analysis 
    and Countermeasures Center:

  Class Seven Authorization under
             Act 5 § 43:
              CODENAME: 
        >>>>>>>>>>>>>>>>>>>>>>
         "Contagion Control"
            >>>>>>>>>>>>>
.....................................\n
               MESSAGE:
     _____PROTOCOL CRITICAL_____ \n 
       ___PROTOCOL CRITICAL___ \n
        __PROTOCOL CRITICAL__ \n
     NBACC//EMERGENCY SOLUTIONS: \n 
     #$~>>>>>>>>>>>>>>AUTHORIZED\n
     ENDING TRANSMISSION>>\n
     >>CONNECTION LOST`).css('white-space','pre')


var $el = $('#b1 p'),
    html = $el.html(),
    txt = $el.text(),
    txtLen = txt.length,
    timeOut,
    char = 0;

    $el.text('|');
setTimeout(function(){
(function typeIt() {
    var humanize = Math.round(Math.random() * (60))+1;
    timeOut = setTimeout(function () {
        char++;
        var type = html.substring(0,char);
        $el.html(type + '|');
        typeIt();
        if (char == txtLen +300) {
            $el.html($el.html().slice(0, -1)); // remove the '|'
            clearTimeout(timeOut);}

    }, humanize);}())
},2000);
    
}
}



///////////////////  C I T Y   L O G  ///////////////////////////////////////////
///////////////////  C I T Y   L O G  ///////////////////////////////////////////
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
/////////////////// E N D  C I T Y   L O G  //////////////////////////////////////
/////////////////// E N D  C I T Y   L O G  //////////////////////////////////////
/////////////////// E N D  C I T Y   L O G  //////////////////////////////////////

//////////// D I S E A S E   L I B R A R Y  ///////////////////////////////////////
//////////// D I S E A S E   L I B R A R Y  ///////////////////////////////////////
//////////// D I S E A S E   L I B R A R Y  ///////////////////////////////////////
var diseases = [
    {name: "CHIMERIC Smallpox",
    symptoms: {0: 'Malaise',
    1: 'Severe headache',
    2: 'Backache',
    3: 'Vomiting',
    4: 'Diarrhoea:',
    5: 'Sudden onset of high fever and agression',
    6: 'Widespread skin rash',
    7: 'Skin rash changed into raised bumps',
    8: 'Bumps changed into fluid filled blisters',
    9: 'Blisters have scabbed over'},
    infectionRate: (.3),
    type: "virus"}
]
////////////  E N D  D I S E A S E   L I B R A R Y  ///////////////////////////////////
////////////  E N D  D I S E A S E   L I B R A R Y  ///////////////////////////////////
////////////  E N D  D I S E A S E   L I B R A R Y  ///////////////////////////////////


///////////////  C O U N T S ///////////////  C O U N T S ///////////////  C O U N T S 
///////////////  C O U N T S ///////////////  C O U N T S ///////////////  C O U N T S 
///////////////  C O U N T S ///////////////  C O U N T S ///////////////  C O U N T S

//////////// T U R N   A R R A Y ////////////////////////////////////////////
var turnArray=[] // here to add all of the symptoms that should be there for any given turn.

//////////// T U R N   C O U N T ////////////////////////////////////////////
var turnCount = 0; // max is 10

//////////// T U R N   C O U N T ////////////////////////////////////////////
var cureCount = 0; // max is 20

//////////// D I S E A S E   C O U N T ////////////////////////////////////////////
var diseaseCount = 0; // max is 30 // every three numbers the disease counter goes up.

//////////// P U B L I C  U N R E S T  C O U N T //////////////////////////////////////
var publicUnrest = 0; // max is 30

//////////// G O V E R N M E N T   C O U N T //////////////////////////////////////////
var govtolerance = 0; // max is 30

//////////// I N F E C T E D  C O U N T //////////////////////////////////

var infected = 1
var infectedNum

//////////// D E A D  C O U N T //////////////////////////////////
var dead = 0;

///////////////////  C H O O S E  T H E   C I T Y ////////////////////////////////////
var selectedCity = citymap[Math.floor(Math.random() * citymap.length)]

//////////// C I T Y  P O P U L A T I O N  C O U N T //////////////////////////////////
var cityPopulation = (selectedCity.area + 2600) ** 2


///////////////  E N D  C O U N T S ///////////////   E N D  C O U N T S  /////////////
///////////////  E N D  C O U N T S ///////////////   E N D  C O U N T S  /////////////
///////////////  E N D  C O U N T S ///////////////   E N D  C O U N T S  /////////////





/// D I S E A S E   L O G I C /////////////////////////
/// D I S E A S E   L O G I C /////////////////////////
/// D I S E A S E   L O G I C /////////////////////////

//////////// C H O O S E   D I S E A S E  ///////////////////////////////
// var randDisease = diseases[Math.floor(Math.random() * diseases.length-1)];
var randDisease = diseases[0];

///////////////////// I N F E C T I V I T Y   R A T E  ////////////////////
var infectPopulation = function(){
    for(let i=0; i < infectedNum; i++){
        if(cureCount >= 7 && infected <= 10){
            if((Math.floor(Math.random()*120)+1) <= 12){
                infected++
            }
        }else if(cureCount >= 11 && cureCount <= 16){
            if((Math.floor(Math.random()*150)+1) <= 15){
                infected++
            }
        }else if(cureCount >= 17 && cureCount <= 25){
            if((Math.floor(Math.random()*170)+1) <= 20){
                infected++
            }
        }
        else if((Math.floor(Math.random()*70)+1) <=10){
            infected++
        }else{continue;}   
    }
    dead = infected - (infected * .99)
    cityPopulation -= infected;
    infected = infected * .99
    
}
// Need to give option to transfer infected back to healthy
// Relation to cure slows infetion
// show number of dead

/////////  D E C L A R E   P O P U L A T I O N  HTML //////////
$('#hpop').text(cityPopulation)
$('#ipop').text(infected)

//////////// D I S E A S E   S Y M P T O M   B I N ////////////////////////////////////
var symptoms = [];
// var showsympt = function(){
// if(diseaseCount < 4){
//     holder.push(randDisease.symptoms[0])
// }
// else if(diseaseCount %4 ===0){
//         for(let i=0; i < (diseaseCount/4); i++){
//             if(holder[i] !== randDisease.symptoms[i])
//         holder.push(randDisease.symptoms[i]);
//             //push the symptom to the array on the turn that they missed.
//             // This is where we let the person know if a new symptom has appeared.
//             // This is where we let the person know if a new symptom has appeared.
//             // This is where we let the person know if a new symptom has appeared.
//             // This is where we let the person know if a new symptom has appeared.
//             // This is where we let the person know if a new symptom has appeared.
//         }for(let e=0; e <turnCount; e++){
//             if(turnCount < (diseaseCount/4)){
//                 holder.push(randDisease.symptoms[e])
//             }
//         }for(let j = 0; j < symptoms.length; j++){
//             if(holder[j] != symptoms[j]){
//                 symptoms.push(holder)
//             }
//         }
//     }
// }

// var showsympt = function(){
//     if(diseaseCount === 0){
//         symptoms.push(randDisease.symptoms[0])
//     }
//     else if(diseaseCount %3 ===0){
//         for(let i=0; i < turnArray.length;i++){
//                 if(turnArray[i] != symptoms[i]){
//                     symptoms.push(turnArray[i])
//                     // Tell user the symptoms here
//                     // Tell user the symptoms here
//                 }
//             }
//         } // Iterate how many syptoms we have

//     }
var showsympt = function(){
        for(let i=0; i < turnArray.length;i++){
            if(diseaseCount < 10){ // less when the disease starts.
                if(turnArray.length %2 ===0 && turnArray[i] != symptoms[i]){
                    symptoms.push(turnArray[i])
                    // Tell user the symptoms here
                    // Tell user the symptoms here
                }
            }else if(diseaseCount >10){ // more when the disease spreads
                if(turnArray[i] != symptoms[i]){
                    symptoms.push(turnArray[i])
                }
                
            }
        }  
        } // Iterate how many syptoms we have
    
//////////////////// C O R E   L O G I C ////////////////////////////
//////////////////// C O R E   L O G I C ////////////////////////////
//////////////////// C O R E   L O G I C ////////////////////////////
function fateOfCity(){

///////////////    M A K I N G    W R O N G  C H O I C E S   ////////////////////////
if ((turnCount - diseaseCount) > 1 && (turnCount - diseaseCount) < 2){
    publicUnrest += 1
    govtolerance +=2
} else if ((turnCount - diseaseCount) >= 2 && (turnCount - diseaseCount) <= 4){
    publicUnrest += 2
    govtolerance +=2
} else if ((turnCount - diseaseCount) >= 5){
    publicUnrest += 5
    govtolerance +=5
} 

///////////////   M A K I N G    R I G H T  C H O I C E S  ////////////////////////
if ((diseaseCount - turnCount) > 1 && (diseaseCount - turnCount) <=2){
    publicUnrest -= 1
    govtolerance -= 1
    cureCount += 3
} else if ((diseaseCount - turnCount) > 2 && (diseaseCount - turnCount) <=4){
    publicUnrest -= 3
    govtolerance -= 3
    cureCount += 5
} else if ((diseaseCount - turnCount) > 2 && (diseaseCount - turnCount) <=4){
    publicUnrest -= 5
    govtolerance -= 4
    cureCount += 7
} 


///////////////   P U B L I C   U N R E S T  L V L  ////////////////////////
if ((publicUnrest) > 1 && (publicUnrest) <= 5){
    govtolerance += 1
} else if ((publicUnrest) > 5 && (publicUnrest) <= 10){
    govtolerance += 2
    diseaseCount += 1
} else if ((publicUnrest) > 10 && (publicUnrest) <= 20){
    govtolerance += 3
    diseaseCount += 3
}   
///////////////   G O V E R N M E N T     L V L  ////////////////////////
if ((govtolerance) > 1 && (govtolerance) <= 5){
    publicUnrest += 1;
    cureCount += .5;
} else if ((govtolerance) > 5 && (govtolerance) <= 10){
    publicUnrest += 2
    cureCount += 1
} else if ((govtolerance) > 10 && (govtolerance) <= 20){
    publicUnrest += 3
    cureCount += 1
}

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
        radius: (selectedCity.ringSize *6) 
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
            for(let i=0; i < (diseaseCount-4); i++){
            selectedCity.center = selectedCity.center
        randomLat = [Math.random() * (-0.050 - 0.0400) -.099,
                    Math.random() * (-0.040 - 0.0300) -.08,
                    Math.random() * (-0.030 - 0.02) - .04,
                    Math.random() * (-0.0020 - 0.000) - .02,
                    Math.random() * (-0.0010 - 0.000) - .02,
                    Math.random() * (0 - 0) +0,
                    Math.random() * (0.050 + 0.0400) + .099,
                    Math.random() * (0.040 + 0.0300)+ .08,
                    Math.random() * (0.030 + 0.025)+ .04,
                    Math.random() * (0.0020 + 0.000) + .02,
                    Math.random() * (-0.0020 - 0.000) - .02,]
        randLatPick = randomLat[Math.floor(Math.random()*randomLat.length-1)+0]

        randomLng = [Math.random() * (-0.050 - 0.0400) -.099,
                    Math.random() * (-0.040 - 0.0300) -.08,
                    Math.random() * (-0.030 - 0.02) - .04,
                    Math.random() * (-0.0020 - 0.000) - .02,
                    Math.random() * (0 - 0) +0,
                    Math.random() * (0.050 + 0.0400) + .099,
                    Math.random() * (0.040 + 0.0300)+ .08,
                    Math.random() * (0.030 + 0.025)+ .04,
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
        radius: (selectedCity.area * (Math.random()*(4-1)))
        })};
////////////////  M I D D L E  G A M E ///////////////////////
////////////////  M I D D L E  G A M E ///////////////////////
////////////////  M I D D L E  G A M E ///////////////////////
    }else if (diseaseCount > 9 && diseaseCount <=15){
        for(let i=0; i < (diseaseCount -8); i++){
            selectedCity.center = selectedCity.center
        randomLat = [Math.random() * (-0.030 - 0.0200) -.099,
                    Math.random() * (-0.020 - 0.0100) -.08,
                    Math.random() * (-0.0120 - 0.005) - .04,
                    Math.random() * (-0.0020 - 0.000) - .02,
                    Math.random() * (-0.0010 - 0.000) - .01,
                    Math.random() * (0 - 0) +0,
                    Math.random() * (0.030 + 0.0200) + .099,
                    Math.random() * (0.020 + 0.0100)+ .08,
                    Math.random() * (0.0120 + 0.005)+ .04,
                    Math.random() * (0.0020 + 0.000) + .02,
                    Math.random() * (0.0010 - 0.000) - .01,]
        randLatPick = randomLat[Math.floor(Math.random()*randomLat.length-1)+0]

        randomLng = [Math.random() * (-0.050 - 0.0400) -.099,
                    Math.random() * (-0.040 - 0.0300) -.08,
                    Math.random() * (-0.030 - 0.02) - .04,
                    Math.random() * (-0.0020 - 0.000) - .02,
                    Math.random() * (0 - 0) +0,
                    Math.random() * (0.050 + 0.0400) + .099,
                    Math.random() * (0.040 + 0.0300)+ .08,
                    Math.random() * (0.030 + 0.025)+ .04,
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
        radius: (selectedCity.area * (Math.random()*(6-4)))
        })};
////////////////  N E A R  E N D   G A M E ///////////////////////
////////////////  N E A R  E N D   G A M E ///////////////////////
////////////////  N E A R  E N D   G A M E ///////////////////////

    }else if(diseaseCount > 16 && diseaseCount <=23){
        for(let i=0; i < diseaseCount - 14; i++){
            selectedCity.center = selectedCity.center
        randomLat = [Math.random() * (-0.030 - 0.0200) -.099,
                    Math.random() * (-0.020 - 0.0100) -.08,
                    Math.random() * (-0.0120 - 0.005) - .04,
                    Math.random() * (-0.0020 - 0.000) - .02,
                    Math.random() * (-0.0010 - 0.000) - .01,
                    Math.random() * (0 - 0) +0,
                    Math.random() * (0.030 + 0.0200) + .099,
                    Math.random() * (0.020 + 0.0100)+ .08,
                    Math.random() * (0.0120 + 0.005)+ .04,
                    Math.random() * (0.0020 + 0.000) + .02,
                    Math.random() * (0.0010 - 0.000) - .01,]
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
        radius: (selectedCity.area * (Math.random()*(8-4)))
        })};
////////////////  E N D   G A M E ///////////////////////
////////////////  E N D   G A M E ///////////////////////
////////////////  E N D   G A M E ///////////////////////
    }else if(diseaseCount > 23){
        for(let i=0; i < 10; i++){
            selectedCity.center = selectedCity.center
        randomLat = [Math.random() * (-0.030 - 0.0200) -.099,
                    Math.random() * (-0.020 - 0.0100) -.08,
                    Math.random() * (-0.0120 - 0.005) - .04,
                    Math.random() * (-0.0020 - 0.000) - .02,
                    Math.random() * (-0.0010 - 0.000) - .01,
                    Math.random() * (0 - 0) +0,
                    Math.random() * (0.030 + 0.0200) + .099,
                    Math.random() * (0.020 + 0.0100)+ .08,
                    Math.random() * (0.0120 + 0.005)+ .04,
                    Math.random() * (0.0020 + 0.000) + .02,
                    Math.random() * (0.0010 - 0.000) - .01,]
        randLatPick = randomLat[Math.floor(Math.random()*randomLat.length-1)+0]

        randomLng = [Math.random() * (-0.050 - 0.0400) -.099,
                    Math.random() * (-0.040 - 0.0300) -.08,
                    Math.random() * (-0.030 - 0.02) - .04,
                    Math.random() * (-0.0020 - 0.000) - .02,
                    Math.random() * (0 - 0) +0,
                    Math.random() * (0.050 + 0.0400) + .099,
                    Math.random() * (0.040 + 0.0300)+ .08,
                    Math.random() * (0.030 + 0.025)+ .04,
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
        radius: (selectedCity.area * (Math.random()*(10-5)))
        })};

    }else {return}
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