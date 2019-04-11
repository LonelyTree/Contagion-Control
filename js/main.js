
    
var toggle = true;
var martial = true;
var peop = true;
var sci = true;
var diagnose = true;
var action = true;
var guide = true;
var refguide = true; 
var d1 = true;
var solutions = true;
var solutionsEnabled = false;
var saveEarth = false;
var theDisease = false;
var day = 0;
$('#backpagewrapper').hide()
$('#map').hide()
$('#windowanchor').hide()
$('#wrapper').hide()
$('#start').hide()
$('#diagwrapper').hide()
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

 ///////////////////// I N I T I A T E   E N D  S C R E E N ////////////////////
var endScreen = function(){
    setTimeout(()=>{
    $('#backpagewrapper').fadeIn(4000)},40000)
}
$('#endbutton').click(function(){
    document.location.reload();
});
//////////////////// T I T L E  P A G E ////////// S T A R T ////////////////
    
let $el = $('#infotyped p'),
html = $el.html(),
txt = $el.text(),
txtLen = txt.length,
timeOut,
char = 0;

$el.text('|');
setTimeout(function(){
(function typeIt() {
let humanize = Math.round(Math.random() * (150-100)+30);
timeOut = setTimeout(function () {
    char++;
    let type = html.substring(0,char);
    $el.html(type + '|');
    typeIt();
    if (char == txtLen) {
        $el.html($el.html().slice(0, -1)); // remove the '|'
        clearTimeout(timeOut);}

}, humanize);}())
},800);

// T I T L E  P A G E ////////// S T A R T /////////////////////////////////////

// T I T L E  P A G E ////////// C L I C K E D/////////////////////////////////////

$('#button').click(()=>{
    $('#frontpagewrapper').fadeOut(1000)
    setTimeout(()=>{
        $('#map').fadeIn(1000)
    },1000)
    setTimeout(()=>{
        $('#windowanchor').fadeIn(1000)
    },3000)
    setTimeout(()=>{
        $('#wrapper').fadeIn(1000)
    },5000)
    setTimeout(()=>{
        $('#start').fadeIn(1000)
    },6000)
})

// // S T A R T   L E A V E //
$('#start').click(()=>{
        $('#start').fadeOut(400)
})

// M A I N   T A B S /////////// C L I C K E D/////////////////////////////////////
$('#martial').on('click', ()=>{
    if(martial === true){
    $('#martial').css('background',"black")
        martial=false
        $('#governmentwrap').toggle("slow")
    }
    else if(martial === false){
        $('#martial').css('background',"#992900")
        martial=true
        $('#governmentwrap').toggle("slow")
    }
})
$('#peop').on('click', ()=>{
    if(peop === true){
        $('#peop').css('background',"black")
            peop=false}
        else if(peop === false){
            $('#peop').css('background',"#992900")
            peop=true
        }
    $('#populationwrap').toggle("slow")
})
$('#sci').on('click', ()=>{
    if(sci === true){
        $('#sci').css('background',"black")
        $('#scientistwrap').toggle("slow")
            sci=false}
        else if(sci === false){
            $('#sci').css('background',"#992900")
            $('#scientistwrap').toggle("slow")
            sci=true}
    
})




///////////////   C D C   C O N T R O L  B T N S   ///////////////


////////////////////////  R E F   C O D E S  /////////////////////////
$('#action').on('click',()=>{
    if(action === true){
        $('#action').css('background',"black")
            action=false}
        else if(action === false){
            $('#action').css('background',"#992900")
            action=true
        }
    $('#refcodes').toggle("slow")
})
///////////////  R E F E R E N C E   G U I D E  /////////////
$('#guide').on('click', ()=>{
if(guide === true){
    $('#guide').css('background',"black")
        guide=false}
    else if(guide === false){
        $('#guide').css('background',"#992900")
        guide=true
    }
$('#refguide').toggle("slow")
})
///////////////  R E F E R E N C E   G U I D E  S U B  B U T N S /////////////
$('#D1').on('click', ()=>{
if(d1 === true){
    $('#D1').css('background',"black")
        d1=false}
    else if(d1 === false){
        $('#D1').css('background',"#992900")
        d1=true
    }
$('#smallpox').toggle()
})
////////////////  E M E R G E N C Y   S O L U T I O N S ///////////////////////
    if(solutionsEnabled === false){
        $('#solutions').css('background','grey')
}


/////////////  E N A B L E   S O U L T O N S   M O D A L ///////////// 
/////////////  E N A B L E   S O U L T O N S   M O D A L ///////////// 
/////////////  E N A B L E   S O U L T O N S   M O D A L ///////////// 
$('#solutions').on('click', ()=>{
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
            } ,2000);
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
/////////// M O D A L   E M N B A C C  P R O T O C O L ////////////////////////////////
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
        
/////////// M A I N  C H O I C E  M O D A L S /////////////////////////////////////////
/////////// M A I N  C H O I C E  M O D A L S /////////////////////////////////////////
/////////// M A I N  C H O I C E  M O D A L S /////////////////////////////////////////
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
    {name:"EM1REF",disease:-100,public:-100,government:-100,cure:-100, kind:"end"},
    {name:"EM4REF",disease:-100,public:-100,government:-100,cure:-100, kind:"end"},
    {name:"EM6REF",disease:-100,public:-100,government:-100,cure:-100, kind:"end"},
    {name:"EM7REF",disease:-100,public:-100,government:-100,cure:-100, kind:"end"},
    {name:"EM8REF",disease:-100,public:-100,government:-100,cure:-100, kind:"end"},

    // D E V  T O O L S --- S H H H  S E C R E T
    // Disease 40
    {name:"df",disease:40,public:0,government:0,cure:0, kind:"dev"},
    // Disease 0
    {name:"d0",disease:-40,public:0,government:0,cure:0, kind:"dev"},
    // Government 40
    {name:"gf",disease:0,public:0,government:40,cure:0, kind:"dev"},
    // Government 0
    {name:"g0",disease:0,public:0,government:-40,cure:0, kind:"dev"},
    // Public 40
    {name:"pf",disease:0,public:40,government:0,cure:0, kind:"dev"},
     // Public 0
    {name:"p0",disease:0,public:-40,government:0,cure:0, kind:"dev"},
     // Cure 25
    {name:"cf",disease:0,public:0,government:0,cure:25, kind:"dev"},
]

// E N D  E V E N T S  L I B R A R Y //// E V E N T S  L I B R A R Y //// E V E N T S  
// E N D  E V E N T S  L I B R A R Y //// E V E N T S  L I B R A R Y //// E V E N T S  
// E N D  E V E N T S  L I B R A R Y //// E V E N T S  L I B R A R Y //// E V E N T S  

////////  L O G  E V E N T S  U S E R  C O N S O L E ///////////////
////////  L O G  E V E N T S  U S E R  C O N S O L E ///////////////


//////////////   R E F   C O D E   S U B M I T   ////////////////////////////
//////////////   R E F   C O D E   S U B M I T   ////////////////////////////
//////////////   R E F   C O D E   S U B M I T   ////////////////////////////


$('#govsub').click(()=>{
    var $orders = $('#gov').val()
    infectedNum = infected * 10
    var index = $ordersArray.findIndex(function(ref){
        return ref.name === $orders
    })


////  C O N S T.  V A R I A B L E S ////////
turnCount++
turnArray.push(randDisease.symptoms[(turnCount-1)])//pushes right symptom per turn to array
infectPopulation() 
fateOfCity()


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
/////////////  D I S T R O   C U R E
distroCure()
/////////////  E M N B A C C  P R O T O C O L
saveearth() 
fullPopulationDeath()
if(theDisease === true){
    cureCount = cureCount +10;
    diseaseCount = diseaseCount - 100;
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


/////////////  T E R M I N A L   L O G S /////////////  T E R M I N A L   L O G S 
/////////////  T E R M I N A L   L O G S /////////////  T E R M I N A L   L O G S 
/////////////  T E R M I N A L   L O G S /////////////  T E R M I N A L   L O G S 
// D A Y
day += 1

$('#console').prepend(`<p style="background: white;" >Days since escape of Patient-Zero: ${day}</p>`)
// G O V E R N M E N T 
var governmentType="";
//40
// HORRIBLE
if($ordersArray[index].government >= 3 && govtolerance <= 10){
    governmentType ="Government: is insulted by your decision and has started its own internal planning department..."
        $('#console').prepend(`<p style="background: #ddd219;" >${governmentType}</p>`)
    }else if ($ordersArray[index].government >= 3 && govtolerance <= 20){
        governmentType ="Government: has been secretly gathering samples of the disease and transporting them through the city..."
        $('#console').prepend(`<p style="background: #ddd219;" >${governmentType}</p>`)
    }else if ($ordersArray[index].government >= 3 && govtolerance <= 30){
        governmentType ="Government: has issued a 'Shoot-on-sight' law for those willingly spreading disease by coming to work or going outside..."
        $('#console').prepend(`<p style="background: #ddd219;" >${governmentType}</p>`)
    }else if ($ordersArray[index].government >= 3 && govtolerance <= 40){
        governmentType ="Government: is activly searching out infected people and bringing them to camps and burning them..."
        $('#console').prepend(`<p style="background: #ddd219;" >${governmentType}</p>`)
    } else if (govtolerance < -30){
        governmentType ="Government: Nothing but echoes from the ruins of once was..."
        $('#console').prepend(`<p style="background: #ddd219;" >${governmentType}</p>`)
// BAD
    }else if ($ordersArray[index].government === 2 && govtolerance <= 10){
        governmentType ="Government: is confused by your decision. They require clearance for all of your medical staff..."
            $('#console').prepend(`<p style="background: #ddd219;" >${governmentType}</p>`)
    }else if ($ordersArray[index].government === 2 && govtolerance <= 20){
        governmentType ="Government: is reacting poorly to your decision. They are starting to question the direction we are going. They will discuss next committee meeting..."
        $('#console').prepend(`<p style="background: #ddd219;" >${governmentType}</p>`)
    }else if ($ordersArray[index].government === 2 && govtolerance <= 30){
        governmentType ="Government: is overflown with requests and due to your poor structuring. They have armed their guards with assault rifles and limit the ammount of access to your clinics..."
        $('#console').prepend(`<p style="background: #ddd219;" >${governmentType}</p>`)
    }else if ($ordersArray[index].government === 2 && govtolerance <= 40){
        governmentType ="Government: is in a reactive state...It is reacting to any outside incompliance with hostility... This will lead to a desintegrtation of public trust and structure... Immediate repair is required..."
        $('#console').prepend(`<p style="background: #ddd219;" >${governmentType}</p>`)
// NEITHER BAD
    }else if ($ordersArray[index].government === 1 && govtolerance <= 10){
        governmentType ="Government: is tense..."
            $('#console').prepend(`<p style="background: #ddd219;" >${governmentType}</p>`)
    }else if ($ordersArray[index].government === 1 && govtolerance <= 20){
        governmentType ="Government: is dissapointed in your decision..."
        $('#console').prepend(`<p style="background: #ddd219;" >${governmentType}</p>`)
    }else if ($ordersArray[index].government === 1 && govtolerance <= 30){
        governmentType ="Government: is destressed at your continuous ignorance..."
        $('#console').prepend(`<p style="background: #ddd219;" >${governmentType}</p>`)
    }else if ($ordersArray[index].government === 1 && govtolerance <= 40){
        governmentType ="Government: has cut off communication channels..."
        $('#console').prepend(`<p style="background: #ddd219;" >${governmentType}</p>`)
// NEUTRAL
    }else if ($ordersArray[index].government === 0 && govtolerance <= 10){
        governmentType ="Government: carries on..."
            $('#console').prepend(`<p style="background: #ddd219;" >${governmentType}</p>`)
    }else if ($ordersArray[index].government === 0 && govtolerance <= 20){
        governmentType ="Government: works diligently to solve the problem..."
        $('#console').prepend(`<p style="background: #ddd219;" >${governmentType}</p>`)
    }else if ($ordersArray[index].government === 0 && govtolerance <= 30){
        governmentType ="Government: is making preparations..."
        $('#console').prepend(`<p style="background: #ddd219;" >${governmentType}</p>`)
    }else if ($ordersArray[index].government === 0 && govtolerance <= 40){
        governmentType ="Government: is continues to commit atrocities..."
        $('#console').prepend(`<p style="background: #ddd219;" >${governmentType}</p>`)
// NEITHER GOOD
    }else if ($ordersArray[index].government === -1 && govtolerance <= 10){
        governmentType ="Government: is happy with your decision..."
            $('#console').prepend(`<p style="background: #ddd219;" >${governmentType}</p>`)
    }else if ($ordersArray[index].government === -1 && govtolerance <= 20){
        governmentType ="Government: is good to see your ethical direction change... "
        $('#console').prepend(`<p style="background: #ddd219;" >${governmentType}</p>`)
    }else if ($ordersArray[index].government === -1 && govtolerance <= 30){
        governmentType ="Government: takes note of this, but are still very tense..."
        $('#console').prepend(`<p style="background: #ddd219;" >${governmentType}</p>`)
    }else if ($ordersArray[index].government === -1 && govtolerance <= 40){
        governmentType ="Government: does not care, but this decision does help them..."
        $('#console').prepend(`<p style="background: #ddd219;" >${governmentType}</p>`)
// GOOD 
    }else if ($ordersArray[index].government === -2 && govtolerance <= 10){
        governmentType ="Government: is grateful to you and the NBACC for helping so much..."
            $('#console').prepend(`<p style="background: #ddd219;" >${governmentType}</p>`)
    }else if ($ordersArray[index].government === -2 && govtolerance <= 20){
        governmentType ="Government: is glad to see a positive change in direction..."
        $('#console').prepend(`<p style="background: #ddd219;" >${governmentType}</p>`)
    }else if ($ordersArray[index].government === -2 && govtolerance <= 30){
        governmentType ="Government: is skeptical about the future of this decision, but is glad to see that it is changing...They open up access to clinics..."
        $('#console').prepend(`<p style="background: #ddd219;" >${governmentType}</p>`)
    }else if ($ordersArray[index].government === -2 && govtolerance <= 40){
        governmentType ="Government: is glad to see that you have some remnants of a brain in your head..."
        $('#console').prepend(`<p style="background: #ddd219;" >${governmentType}</p>`)
// GREAT 
    }else if ($ordersArray[index].government <=-3 && govtolerance <= 10){
        governmentType ="Government: is extremely happy about your decision...It sends gifts to you and your office"
            $('#console').prepend(`<p style="background: #ddd219;" >${governmentType}</p>`)
    }else if ($ordersArray[index].government <=-3 && govtolerance <= 20){
        governmentType ="Government: is happy to see that these types of decisions of such importance are being made..."
        $('#console').prepend(`<p style="background: #ddd219;" >${governmentType}</p>`)
    }else if ($ordersArray[index].government <=-3 && govtolerance <= 30){
        governmentType ="Government: is glad to see a large positive shift to normalicy...Doctors and NBACC technicals are shared..."
        $('#console').prepend(`<p style="background: #ddd219;" >${governmentType}</p>`)
    }else if ($ordersArray[index].government <=-3 && govtolerance <= 40){
        governmentType ="Government: reinstates communication with us..."
        $('#console').prepend(`<p style="background: #ddd219;" >${governmentType}</p>`)
    }

var pubtype="";
//40
// HORRIBLE
if($ordersArray[index].public >= 3 && publicUnrest <= 10){
    pubtype ="Public: is frightened by your actions... Your reputation and history is drug through the mud on live Television..."
        $('#console').prepend(`<p style="background: #6290fe;">${pubtype}</p>`)
    }else if ($ordersArray[index].public >= 3 && publicUnrest <= 20){
        pubtype ="Public:  is horrified by your abilities as a decision maker...A rumor starts to float around that you actually want the disease to spread... "
        $('#console').prepend(`<p style="background: #6290fe;">${pubtype}</p>`)
    }else if ($ordersArray[index].public >= 3 && publicUnrest <= 30){
        pubtype ="Public:  is hostile towards Doctors and accuses you for spreading the disease..."
        $('#console').prepend(`<p style="background: #6290fe;">${pubtype}</p>`)
    }else if ($ordersArray[index].public >= 3 && publicUnrest <= 40){
        pubtype ="Public: it is chaos in the streets... Shootings and looting is commonplace... No one cares about the disease anymore..."
        $('#console').prepend(`<p style="background: #6290fe;">${pubtype}</p>`)
    }else if (publicUnrest < -30){
        pubtype ="Public: Cries of the dead haunt your living nightmare..."
        $('#console').prepend(`<p style="background: #6290fe;">${pubtype}</p>`)
// BAD
    }else if ($ordersArray[index].public === 2 && publicUnrest <= 10){
        pubtype ="Public: they are disturbed by your lack of care for them...but they want to be sure that this new disease is taken care of quickly... They comply..."
            $('#console').prepend(`<p style="background: #6290fe;">${pubtype}</p>`)
    }else if ($ordersArray[index].public=== 2 && publicUnrest <= 20){
        pubtype ="Public:  They resist their Government more, because they have lost faith in you as a leader..."
        $('#console').prepend(`<p style="background: #6290fe;">${pubtype}</p>`)
    }else if ($ordersArray[index].public=== 2 && publicUnrest <= 30){
        pubtype ="Public: They are disgusted by the way you have decided to handle things...Your teams are assaulted on the streets..."
        $('#console').prepend(`<p style="background: #6290fe;">${pubtype}</p>`)
    }else if ($ordersArray[index].public=== 2 && publicUnrest <= 40){
        pubtype ="Public: They are continuously rioting against the Government Control Force..."
        $('#console').prepend(`<p style="background: #6290fe;">${pubtype}</p>`)
// NEITHER BAD
    }else if ($ordersArray[index].public === 1 && publicUnrest <= 10){
        pubtype ="Public: They are dissapointed with your choice"
            $('#console').prepend(`<p style="background: #6290fe;">${pubtype}</p>`)
    }else if ($ordersArray[index].public=== 1 && publicUnrest <= 20){
        pubtype ="Public:  They put up posters with your face and urinate on them..."
        $('#console').prepend(`<p style="background: #6290fe;">${pubtype}</p>`)
    }else if ($ordersArray[index].public=== 1 && publicUnrest <= 30){
        pubtype ="Public: They drag a paper-mache doll of you through the streets... The Government disperses them with rubber bullets and gas..."
        $('#console').prepend(`<p style="background: #6290fe;">${pubtype}</p>`)
    }else if ($ordersArray[index].public=== 1 && publicUnrest <= 40){
        pubtype ="Public: They vandalize all the clinics and harrass Medical Staff..."
        $('#console').prepend(`<p style="background: #6290fe;">${pubtype}</p>`)
    }
//NEUTRAL
    else if ($ordersArray[index].public === 0 && publicUnrest <= 10){
        pubtype ="Public: carries on..."
            $('#console').prepend(`<p style="background: #6290fe;">${pubtype}</p>`)
    }else if ($ordersArray[index].public === 0 && publicUnrest <= 20){
        pubtype ="Public:  trying to do the best they can to make it through what ever this is..."
        $('#console').prepend(`<p style="background: #6290fe;">${pubtype}</p>`)
    }else if ($ordersArray[index].public === 0 && publicUnrest <= 30){
        pubtype ="Public: Will not respond to repeated attepmts at medical treatment..."
        $('#console').prepend(`<p style="background: #6290fe;">${pubtype}</p>`)
    }else if ($ordersArray[index].public === 0 && publicUnrest <= 40){
        pubtype ="Public: Unable to contact due to high risk to your medical staff's lives..."
        $('#console').prepend(`<p style="background: #6290fe;">${pubtype}</p>`)
//NEITHER GOOD
    }else if ($ordersArray[index].public === -1  && publicUnrest <= 10){
        pubtype ="Public: They are happy to see any change for the better. Children give lolypops to the medical teams as they pass by..."
            $('#console').prepend(`<p style="background: #6290fe;">${pubtype}</p>`)
    }else if ($ordersArray[index].public=== -1 && publicUnrest <= 20){
        pubtype ="Public:  They know you can make the right decisions...They want you to make more of them..."
        $('#console').prepend(`<p style="background: #6290fe;">${pubtype}</p>`)
    }else if ($ordersArray[index].public=== -1 && publicUnrest <= 30){
        pubtype ="Public: They see that progress has been made and lighten up on vandalizing NBACC property..."
        $('#console').prepend(`<p style="background: #6290fe;">${pubtype}</p>`)
    }else if ($ordersArray[index].public=== -1 && publicUnrest <= 40){
        pubtype ="Public: They are not paying attention to the small steps you are making towards calming them down..."
        $('#console').prepend(`<p style="background: #6290fe;">${pubtype}</p>`)
// GOOD
    }else if ($ordersArray[index].public === -2 && publicUnrest <= 10){
        pubtype ="Public: They are excited that you care so much about them... They comply with the medical teams that you send out..."
            $('#console').prepend(`<p style="background: #6290fe;">${pubtype}</p>`)
    }else if ($ordersArray[index].public=== -2 && publicUnrest <= 20){
        pubtype ="Public:  They know you are doing your best and convince others of your experience and willingness to see this through..."
        $('#console').prepend(`<p style="background: #6290fe;">${pubtype}</p>`)
    }else if ($ordersArray[index].public=== -2 && publicUnrest <= 30){
        pubtype ="Public: They see that you have some essence of humanity in you... The medical staff are left alone..."
        $('#console').prepend(`<p style="background: #6290fe;">${pubtype}</p>`)
    }else if ($ordersArray[index].public=== -2 && publicUnrest <= 40){
        pubtype ="Public: Their riots and violence lessens as more people return to their homes..."
        $('#console').prepend(`<p style="background: #6290fe;">${pubtype}</p>`)
// GREAT
    }else if ($ordersArray[index].public >= -3 && publicUnrest <= 10){
        pubtype ="Public: They know that they are in capable hands...They are orderly and polite...Your medical teams sees three times their normal ammount of patients in a day..."
            $('#console').prepend(`<p style="background: #6290fe;">${pubtype}</p>`)
    }else if ($ordersArray[index].public>= -3 && publicUnrest <= 20){
        pubtype ="Public: The clinics are cleaned up by volunteers and your medical staff are bolstered by volunteer doctors from the city..."
        $('#console').prepend(`<p style="background: #6290fe;">${pubtype}</p>`)
    }else if ($ordersArray[index].public>= -3 && publicUnrest <= 30){
        pubtype ="Public: A counter riot occurs in support of you and your decisions..."
        $('#console').prepend(`<p style="background: #6290fe;">${pubtype}</p>`)
    }else if ($ordersArray[index].public>= -3 && publicUnrest <= 40){
        pubtype ="Public: They stop their rioting and let the medical teams pass through without issue..."
        $('#console').prepend(`<p style="background: #6290fe;">${pubtype}</p>`)
    }

var curetype="";
//25
// GREAT
if($ordersArray[index].cure >= 3 && cureCount <= 5){
    curetype ="Cure Progress: Amazing! This technique we used on the disease worked! This opens up so many more avenues for exploration!"
        $('#console').prepend(`<p style="background: lightblue;" >${curetype}</p>`)
    }else if ($ordersArray[index].cure >= 3 && cureCount <= 10){
        curetype ="Cure Progress: Fantastic, another huge step towards developing a cure! "
        $('#console').prepend(`<p style="background: lightblue;">${curetype}</p>`)
    }else if ($ordersArray[index].cure >= 3 && cureCount <= 15){
        curetype ="Cure Progress: Our lab has been staying up 24/7 and we have made a breakthrough! We might just be there!"
        $('#console').prepend(`<p style="background: lightblue;">${curetype}</p>`)
    }else if ($ordersArray[index].cure >= 3 && cureCount <= 20){
        curetype ="Cure Progress: The cure is being synthesized as we speak! Nothing can stop us!"
        $('#console').prepend(`<p style="background: lightblue;">${curetype}</p>`)
    }else if (cureCount < -20){
        curetype ="Cure Progress: At what cost? ........"
        $('#console').prepend(`<p style="background: lightblue;">${curetype}</p>`)
// GOOD
    }else if ($ordersArray[index].cure === 2 && cureCount <= 5){
        curetype ="Cure Progress: What a discovery!"
            $('#console').prepend(`<p style="background: lightblue;">${curetype}</p>`)
    }else if ($ordersArray[index].cure=== 2 && cureCount <= 10){
        curetype ="Cure Progress: This changes everything! Wonderful!"
        $('#console').prepend(`<p style="background: lightblue;">${curetype}</p>`)
    }else if ($ordersArray[index].cure=== 2 && cureCount <= 15){
        curetype ="Cure Progress: We can do this!"
        $('#console').prepend(`<p style="background: lightblue;">${curetype}</p>`)
    }else if ($ordersArray[index].cure=== 2 && cureCount <= 20){
        curetype ="Cure Progress: We are so close!"
        $('#console').prepend(`<p style="background: lightblue;">${curetype}</p>`)
// OK
    }else if ($ordersArray[index].cure === 1 && cureCount <= 5){
        curetype ="Cure Progress: Not something we didn't know, but anything helps!"
            $('#console').prepend(`<p style="background: lightblue;">${curetype}</p>`)
    }else if ($ordersArray[index].cure=== 1 && cureCount <= 10){
        curetype ="Cure Progress: Great small find today!"
        $('#console').prepend(`<p style="background: lightblue;">${curetype}</p>`)
    }else if ($ordersArray[index].cure=== 1 && cureCount <= 15){
        curetype ="Cure Progress: Lab tech noted a peculiar event...Progress is progress!"
        $('#console').prepend(`<p style="background: lightblue;">${curetype}</p>`)
    }else if ($ordersArray[index].cure=== 1 && cureCount <= 20){
        curetype ="Cure Progress: We are on the cusp of discovery!"
        $('#console').prepend(`<p style="background: lightblue;">${curetype}</p>`)
// NEUTRAL
    }else if ($ordersArray[index].cure === 0 && cureCount <= 5){
        curetype ="Cure Progress: No progress today, but we will continue searching for answers..."
            $('#console').prepend(`<p style="background: lightblue;">${curetype}</p>`)
    }else if ($ordersArray[index].cure=== 0 && cureCount <= 10){
        curetype ="Cure Progress: We tried all of our marks today, no progress..."
        $('#console').prepend(`<p style="background: lightblue;">${curetype}</p>`)
    }else if ($ordersArray[index].cure=== 0 && cureCount <= 15){
        curetype ="Cure Progress: Even with our new information, this disease proves difficult to manage...no progress..."
        $('#console').prepend(`<p style="background: lightblue;">${curetype}</p>`)
    }else if ($ordersArray[index].cure=== 0 && cureCount <= 20){
        curetype ="Cure Progress: An unexpected delay has occured in our process...no progress..."
        $('#console').prepend(`<p style="background: lightblue;">${curetype}</p>`)
    }

    var diseasetype="";
    //40
// HORRIBLE
    if($ordersArray[index].disease >= 3 && diseaseCount <= 10){
        diseasetype ="Disease: This was a terrible decision! This disease shows potential to be something horrible..."
            $('#console').prepend(`<p style="background:#c50303;">${diseasetype}</p>`)
        }else if ($ordersArray[index].disease >= 3 && diseaseCount <= 20){
            diseasetype ="Disease: How could you have done this!? This disease is mutating like nothing that we have ever seen before..."
            $('#console').prepend(`<p style="background:#c50303;">${diseasetype}</p>`)
        }else if ($ordersArray[index].disease >= 3 && diseaseCount <= 30){
            diseasetype ="Disease: Our lab technitians will not step into the specimen containment partition because of our lack of safety... Our research is grindng to a halt..."
            $('#console').prepend(`<p style="background:#c50303;">${diseasetype}</p>`)
        }else if ($ordersArray[index].disease >= 3 && diseaseCount <= 40){
            diseasetype ="Disease: I never thought I would see one, but thanks to you this is a world ending disease... May our legacy be known by those who survive..."
            $('#console').prepend(`<p style="background:#c50303;">${diseasetype}</p>`)
        }else if (diseaseCount < -20){
            diseasetype ="Disease: It is gone...for how long is anyone's guess..."
            $('#console').prepend(`<p style="background:#c50303;">${curetype}</p>`)
// BAD
    }else if ($ordersArray[index].public === 2 && diseaseCount <= 10){
            diseasetype ="Disease: This was a horrible idea, these people need to know just how dangerous this disease is!"
                $('#console').prepend(`<p style="background:#c50303;">${diseasetype}</p>`)
        }else if ($ordersArray[index].public=== 2 && diseaseCount <= 20){
            diseasetype ="Disease: How could you let this happen? It has spread even more now!"
            $('#console').prepend(`<p style="background:#c50303;">${diseasetype}</p>`)
        }else if ($ordersArray[index].public=== 2 && diseaseCount <= 30){
            diseasetype ="Disease: The disease has killed one of our lab technicians...This is a deadly situation..."
            $('#console').prepend(`<p style="background:#c50303;">${diseasetype}</p>`)
        }else if ($ordersArray[index].public=== 2 && diseaseCount <= 40){
            diseasetype ="Disease: There may be no containing it now...because of you..."
            $('#console').prepend(`<p style="background:#c50303;">${diseasetype}</p>`)
    // NEITHER BAD
        }else if ($ordersArray[index].public === 1 && diseaseCount <= 10){
            diseasetype ="Disease: We could have forseen this. This was preventable..."
                $('#console').prepend(`<p style="background:#c50303;">${diseasetype}</p>`)
        }else if ($ordersArray[index].public=== 1 && diseaseCount <= 20){
            diseasetype ="Disease:  The disease has not responded to any form of our new procedure..."
            $('#console').prepend(`<p style="background:#c50303;">${diseasetype}</p>`)
        }else if ($ordersArray[index].public=== 1 && diseaseCount <= 30){
            diseasetype ="Disease: The disease has spread and infected more innocent people because of a simple mistake... Your mistake..."
            $('#console').prepend(`<p style="background:#c50303;">${diseasetype}</p>`)
        }else if ($ordersArray[index].public=== 1 && diseaseCount <= 40){
            diseasetype ="Disease: This is the end...The last nudge into the abyss..."
            $('#console').prepend(`<p style="background:#c50303;">${diseasetype}</p>`)
        }
    //NEUTRAL
        else if ($ordersArray[index].public === 0 && diseaseCount <= 10){
            diseasetype ="Disease: We have seen no new mutations in the disease..."
                $('#console').prepend(`<p style="background:#c50303;">${diseasetype}</p>`)
        }else if ($ordersArray[index].public=== 0 && diseaseCount <= 20){
            diseasetype ="Disease:  The disease has gone dormant in our samples...I wonder if it is the same with people?"
            $('#console').prepend(`<p style="background:#c50303;">${diseasetype}</p>`)
        }else if ($ordersArray[index].public=== 0 && diseaseCount <= 30){
            diseasetype ="Disease: There are no reports of new cases today...It could just be dormant..."
            $('#console').prepend(`<p style="background:#c50303;">${diseasetype}</p>`)
        }else if ($ordersArray[index].public=== 0 && diseaseCount <= 40){
            diseasetype ="Disease: It hasn't mutated yet, but it will..."
            $('#console').prepend(`<p style="background:#c50303;">${diseasetype}</p>`)
    //NEITHER GOOD
        }else if ($ordersArray[index].public === -1 && diseaseCount <= 10){
            diseasetype ="Disease: We discovered a simple way of blocking a small part of its dna! This will unlock doors in the future..."
                $('#console').prepend(`<p style="background:#c50303;">${diseasetype}</p>`)
        }else if ($ordersArray[index].public=== -1 && diseaseCount <= 20){
            diseasetype ="Disease:  This is a good step in the right direction..."
            $('#console').prepend(`<p style="background:#c50303;">${diseasetype}</p>`)
        }else if ($ordersArray[index].public=== -1 && diseaseCount <= 30){
            diseasetype ="Disease: This will help, but not as much as is needed..."
            $('#console').prepend(`<p style="background:#c50303;">${diseasetype}</p>`)
        }else if ($ordersArray[index].public=== -1 && diseaseCount <= 40){
            diseasetype ="Disease: Too little, too late...."
            $('#console').prepend(`<p style="background:#c50303;">${diseasetype}</p>`)
    // GOOD
        }else if ($ordersArray[index].public === -2 && diseaseCount <= 10){
            diseasetype ="Disease: What a discovery! We need to send this to clinics in the city ASAP!"
                $('#console').prepend(`<p style="background:#c50303;">${diseasetype}</p>`)
        }else if ($ordersArray[index].public=== -2 && diseaseCount <= 20){
            diseasetype ="Disease:  This is a fantastic step in the right direction! The disease is reacting to it!"
            $('#console').prepend(`<p style="background:#c50303;">${diseasetype}</p>`)
        }else if ($ordersArray[index].public=== -2 && diseaseCount <= 30){
            diseasetype ="Disease: This is going to help a lot of people... You should be proud..."
            $('#console').prepend(`<p style="background:#c50303;">${diseasetype}</p>`)
        }else if ($ordersArray[index].public=== -2 && diseaseCount <= 40){
            diseasetype ="Disease: I know things look bad, but if we keep making decisions like this, we might have a chance..."
            $('#console').prepend(`<p style="background:#c50303;">${diseasetype}</p>`)
    // GREAT
        }else if ($ordersArray[index].public >= -3 && diseaseCount <= 10){
            diseasetype ="Disease: You goddamn beautiful genius! This will stop so many people from getting sick!"
                $('#console').prepend(`<p style="background:#c50303;">${diseasetype}</p>`)
        }else if ($ordersArray[index].public>= -3 && diseaseCount <= 20){
            diseasetype ="Disease:  How did you find this method!? This will stop the infection from spreading incredibly effectively!! "
            $('#console').prepend(`<p style="background:#c50303;">${diseasetype}</p>`)
        }else if ($ordersArray[index].public>= -3 && diseaseCount <= 30){
            diseasetype ="Disease: This is a large step in the right direction! I'm showing reduction in infection sizes on 5 of our samples!"
            $('#console').prepend(`<p style="background:#c50303;">${diseasetype}</p>`)
        }else if ($ordersArray[index].public>= -3 && diseaseCount <= 40){
            diseasetype ="Disease: This is a miracle! You may have just pulled us away from oblivion!"
            $('#console').prepend(`<p style="background:#c50303;">${diseasetype}</p>`)
        }

/////////////  T E R M I N A L   L O G S /////////////  T E R M I N A L   L O G S 
/////////////  T E R M I N A L   L O G S /////////////  T E R M I N A L   L O G S 
/////////////  T E R M I N A L   L O G S /////////////  T E R M I N A L   L O G S 

//////////////  D I S E A S E  C O R O L A T I O N  ////////////////////////////
if($ordersArray[index].kind === randDisease.type){
    $('#console').prepend(`<p style=" background: #6ec503;">Research: The disease reacted to our methods!</p>`)
    // This is where we tell them that their decsion was good and the desease has slowed down!
}
else if($ordersArray[index].kind === "good"){
    $('#console').prepend(`<p style=" background: #6ec503;">This was a good decision, but may have incurred at others expense...</p>`)
    // Tell them that their choice has had a relatively good impact on the state of things!
}else if($ordersArray[index].kind === "bad"){
    $('#console').prepend(`<p style=" background: #6ec503;">This was a bad idea, many things may be affected by this...</p>`)
    // Tell them that their choice was not in the best interest of the health of the public
}else if($ordersArray[index].kind === "horrible"){
    $('#console').prepend(`<p style=" background: #6ec503;">You may have doomed us...</p>`)
    // Tell them that they may have doomed the city
} else if($ordersArray[index].kind === "great"){
    $('#console').prepend(`<p style=" background: #6ec503;">This is incredible!</p>`)
    // Tell them that they should recieve a commendation for their wonderful efforts!
}else if($ordersArray[index].kind === "none"){
    $('#console').prepend(`<p style=" background: #6ec503;">Idiling by...</p>`)
    // Tell them that sometimes evils are neccessary.
}else if($ordersArray[index].kind === "dev"){
    $('#console').prepend(`<p style=" background: yellow;">Hey! That's a CheatCode!! This isn't real life?? We're in a computer??? AHHHHHHH!!!!!!</p>`)
    // Tell them that sometimes evils are neccessary.
}
    ////////// S T A R T:  Y O U  M O N S T E R ////////////////////////////////////
    ////////// S T A R T:  Y O U  M O N S T E R ////////////////////////////////////
    ////////// S T A R T:  Y O U  M O N S T E R ////////////////////////////////////
else if ($ordersArray[index].kind === "end"){

        
        $('#youmonster').trigger('click')
////// F A D E   E F F E C T /////////////
        $("#youmonster").modal({
            fadeDuration: 1100
        })
        $('#g1 p').text($(`li:contains(${$orders})`).children('.horror').text())

    let $el = $('#g1 p'),
    html = $el.html(),
    txt = $el.text(),
    txtLen = txt.length,
    timeOut,
    char = 0;

    $el.text('|');
setTimeout(function(){
(function typeIt() {
    let humanize = Math.round(Math.random() * (150-60))+1;
    timeOut = setTimeout(function () {
        char++;
        let type = html.substring(0,char);
        $el.html(type + '|');
        typeIt();
        if (char == txtLen) {
            $el.html($el.html().slice(0, -1)); // remove the '|'
            clearTimeout(timeOut);}

    }, humanize);}())
},2000);






    setTimeout(()=>{
        $('#saveearthenacted').trigger('click')
////// F A D E   E F F E C T /////////////
    $("#saveearthEnacted").modal({
        fadeDuration: 1100
    })
    $('#f1 p').text(`
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
 
         FORM RESTRUCTURING 
          ::::##~CATA-ULRE
         >>>>>>>>>>>>>>>>>>
        PROTOCOL: "SAVE EARTH"
            >>>>>>>>>>>>>
              ENACTED
.....................................
              MESSAGE:
  CIVILIAN COMMUNICATIONS LOST>>>>>
  ALL DARK ON VSO SPECTRUM>>>>>>>
  <<<<<<TOTAL LOSS OF LIFE>>>>>>>
  FAILURE AT THE MOST BASIC LEVELS
              >>>>>>>
   COMPILING DATA AND PREPARING TO 
   FURTHER SANITIZE CITY...

     PREP FOR HEARING WITH NBACC
     COMPETENCE PANEL AT 08:00 
          <<<<<<<<>>>>>>>
     YOU HAVE A LOT TO EXPLAIN
             >>>>>>>>>
 CONNECTION LOST`).css('white-space','pre')

 let $el = $('#f1 p'),
 html = $el.html(),
 txt = $el.text(),
 txtLen = txt.length,
 timeOut,
 char = 0;

 $el.text('|');
setTimeout(function(){
(function typeIt() {
 let humanize = Math.round(Math.random() * (60))+1;
 timeOut = setTimeout(function () {
     char++;
     let type = html.substring(0,char);
     $el.html(type + '|');
     typeIt();
     if (char == txtLen +300) {
         $el.html($el.html().slice(0, -1));
         clearTimeout(timeOut);}

 }, humanize);}())
},1000);
}, 15000)


endScreen()

}else if ($ordersArray[index].kind != randDisease.type){
    $ordersArray[index].cure = 0;
    $('#console').prepend(`<p style=" background: #6ec503;">Research: This method has had no effect on the disease!</p>`)
}
////////// E N D:  Y O U  M O N S T E R ////////////////////////////////////
////////// E N D:  Y O U  M O N S T E R ////////////////////////////////////
////////// E N D:  Y O U  M O N S T E R ////////////////////////////////////


////////// S H O W  S Y M P T O M S ////////////////////////////////////////
////////// S H O W  S Y M P T O M S ////////////////////////////////////////
////////// S H O W  S Y M P T O M S ////////////////////////////////////////
////////// S H O W  S Y M P T O M S ////////////////////////////////////////
if(symptoms.length === turnArray.length){
    if(govtolerance < -30){
        $('#console').prepend(`<p>Nothing But Wasteland</p<`)
    }else {
    $('#console').prepend(`<p style=" background: #6ec503;">NEW LIST OF SYMPTOMS:</p><p style=" background: #6ec503;">${symptoms}</p>`)
    }}
})

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
// C O M P L E T E 

//connect the progress bars 
// C O M P L E T E 

// make function that calculates infectivity and pushes it to the name. 
//  C O M P L E T E 

//  fine tune circle appearances.
// C O M P L E T E 

// Make modal for winning with cure reaching 100%
// C O M P L E T E 

// Make modal for failure with population reaching 0.
//  C O M P L E T E 

// Make reactionary events for government (5)  population (5) and science (3)
// N O T   A T T A I N A B L E  W/  T I M E F R A M E
// show symptoms as they appear
// C O M P L E T E

// show symptoms on window as they appear
// C O M P L E T E

// corrolate decisions based on disease type 
// C O M P L E T E 

// give ability to diagnose and start on cure
// C O M P L E T E

// create end page and restart button
// C O M P L E T E




//////////////  E N D   R E F   C O D E   S U B M I T   ////////////////////////////
//////////////  E N D   R E F   C O D E   S U B M I T   /////////////////////////////////////////////  E N D   R E F   C O D E   S U B M I T   ////////////////////////////


////////////// C U R E  D I S T R I B U T E D /////////////////////
////////////// C U R E  D I S T R I B U T E D /////////////////////
////////////// C U R E  D I S T R I B U T E D /////////////////////
var fullPopulationDeath = function (){
    if(cityPopulation <= 0){
        $('#fulldeath').trigger('click')
////// F A D E   E F F E C T /////////////
        $("#fulldeath").modal({
            fadeDuration: 1100
        })
        $('#d1 p').text(`
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

        FORM RESTRUCTURING 
        ::::##~CATA-ULRE
        >>>>>>>>>>>>>>>>>>
           "FULL DEATH"
          >>>>>>>>>>>>>
.....................................
             MESSAGE:
  CDCEM COMMUNICATIONS LOST>>>>>
  ALL DARK ON VSO SPECTRUM>>>>>>>
  <<<<<<TOTAL LOSS OF LIFE>>>>>>>
 FAILURE AT THE MOST BASIC LEVELS...
 
 COMPILING DATA AND PREPARING TO 
 SANITIZE CITY...
 
 SEVERAL SYMPTOMS SIMILAR TO OURS
 SEEN OUTSIDE OF CONTAINMENT....
 PREP FOR EMERGENCY LANDING>>>>>>>>> 
 <<<<YOU ARE HEADED IN FIRST>>>>>>>>`).css('white-space','pre')


let $el = $('#d1 p'),
    html = $el.html(),
    txt = $el.text(),
    txtLen = txt.length,
    timeOut,
    char = 0;

    $el.text('|');
setTimeout(function(){
(function typeIt() {
    let humanize = Math.round(Math.random() * (60))+1;
    timeOut = setTimeout(function () {
        char++;
        let type = html.substring(0,char);
        $el.html(type + '|');
        typeIt();
        if (char == txtLen +300) {
            $el.html($el.html().slice(0, -1));
            clearTimeout(timeOut);}

    }, humanize);}())
},2000);
    endScreen()
}
}




//////////////  E N D  C U R E  D I S T R I B U T E D /////////////
//////////////  E N D  C U R E  D I S T R I B U T E D /////////////
//////////////  E N D  C U R E  D I S T R I B U T E D /////////////

////////////// C U R E  D I S T R I B U T E D /////////////////////
////////////// C U R E  D I S T R I B U T E D /////////////////////
////////////// C U R E  D I S T R I B U T E D /////////////////////

var distroCure = function (){
    if(cureCount >= 25){
        $('#curedistro').trigger('click')
////// F A D E   E F F E C T /////////////
        $("#curedistro").modal({
            fadeDuration: 1100
        })
////// T Y P I N G   E F F E C T //////////
        $('#c1 p').text(`
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
.....................................
              MESSAGE:
          CONGRATULATIONS!!
 BECAUSE OF YOUR DILIGENCE AND HARD 
 WORK THE DISEASE HAS BEEN 
 IDENTIFIED AND WE ARE NOW IN THE 
 PROCESS OF MANUFACTURING A CURE ON
 A LARGE SCALE... 

 WORKING PROTOTYPES ARE SHOWING 100% 
 RECOVERY IN EVEN THE MOST ADVANCED 
 CASES IN THE ZONE. YOU SHOULD BE 
 PROUD OF YOURSELF... YOU HAVE SAVED 
 HE LIVES OF THE PEOPLE IN THIS CITY 
 AND COUNTLESS MORE IN THE WORLD...
 THE PRESIDENT OF THE U.N. WISHES 
 TO SPEAK WITH YOU... THERE IS A 
 NEW RUMOR....
 .........YOUR SERVICES ARE 
 REQUESTED...

  <<<<<<<ENDING TRANSMISSION>>>>>>>`).css('white-space','pre')

        let $el = $('#c1 p'),
        html = $el.html(),
        txt = $el.text(),
        txtLen = txt.length,
        timeOut,
        char = 0;
    
        $el.text('|');
    setTimeout(function(){
    (function typeIt() {
        let humanize = Math.round(Math.random() * (60))+1;
        timeOut = setTimeout(function () {
            char++;
            let type = html.substring(0,char);
            $el.html(type + '|');
            typeIt();
            if (char == txtLen +300) {
                $el.html($el.html().slice(0, -1)); 
                clearTimeout(timeOut);}
    
        }, humanize);}())
    },2000);
        endScreen()
    }
    }


////////////// E N D  C U R E  D I S T R I B U T E D /////////////////////
////////////// E N D  C U R E  D I S T R I B U T E D /////////////////////
////////////// E N D  C U R E  D I S T R I B U T E D /////////////////////

//////////////  S A V E   E A R T H  P R O T O C O L ///////////////
//////////////  S A V E   E A R T H  P R O T O C O L ///////////////
//////////////  S A V E   E A R T H  P R O T O C O L ///////////////

var saveearth = function (){
    if(diseaseCount > 35 && saveEarth === false){
        solutionsEnabled = true
        saveEarth = true
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


let $el = $('#b1 p'),
    html = $el.html(),
    txt = $el.text(),
    txtLen = txt.length,
    timeOut,
    char = 0;

    $el.text('|');
setTimeout(function(){
(function typeIt() {
    let humanize = Math.round(Math.random() * (60))+1;
    timeOut = setTimeout(function () {
        char++;
        let type = html.substring(0,char);
        $el.html(type + '|');
        typeIt();
        if (char == txtLen +300) {
            $el.html($el.html().slice(0, -1)); 
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
var cityPopulation = (selectedCity.area) ** 2


///////////////  E N D  C O U N T S ///////////////   E N D  C O U N T S  /////////////
///////////////  E N D  C O U N T S ///////////////   E N D  C O U N T S  /////////////
///////////////  E N D  C O U N T S ///////////////   E N D  C O U N T S  /////////////

///////////////   D I A G N O S E    B U T T O N   ///////////////
$('#diagnose').click(()=>{
    if(diagnose === true){
        $('#diagnose').css("background","white").css("color","black")
        $("#diagwrapper").toggle('slow')
        diagnose=false}
    else if(diagnose === false){
        $('#diagnose').css("background","cadetblue").css("color","white")
        $("#diagwrapper").toggle('slow')
        diagnose=true}
    })

$('#diagsub').click(()=>{
    let $imADoctor = $('#diaginput').val()
    if($imADoctor.toLowerCase() === randDisease.name.toLowerCase()){
        $('#console').prepend(`<p style="background: white; color: black">"You were right! I can't believe it! Our treatment of the infected and research of cure will increase exponentially!"</p>`)
        theDisease = true
    }else {$('#console').prepend(`<p style="background: white; color: black">"You were wrong! Your hubris has sent our research in the wrong direction... You may have killed half of our citizens..."</p>`)
        diseaseCount = diseaseCount + 10;}
})


///////////////   E N D  D I A G N O S E    B U T T O N   ///////////////



/// D I S E A S E   L O G I C /////////////////////////
/// D I S E A S E   L O G I C /////////////////////////
/// D I S E A S E   L O G I C /////////////////////////

//////////// C H O O S E   D I S E A S E  ///////////////////////////////
// var randDisease = diseases[Math.floor(Math.random() * diseases.length-1)];
var randDisease = diseases[0];

///////////////////// I N F E C T I V I T Y   R A T E  ////////////////////
var infectPopulation = function(){
    for(let i=0; i < infectedNum; i++){
        if(cureCount >= 7 && cureCount <= 10){
            if((Math.floor(Math.random()*140)+1) <= 10){
                infected++
            }
        }else if(cureCount >= 11 && cureCount <= 16){
            if((Math.floor(Math.random()*200)+1) <= 10){
                infected++
            }
        }else if(cureCount >= 17 && cureCount <= 25){
            if((Math.floor(Math.random()*250)+1) <= 10){
                infected++
            }
        }
        else if((Math.floor(Math.random()*100)+1) <=10){
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

var showsympt = function(){
        for(let i=0; i < turnArray.length;i++){
            if(diseaseCount < 10){ 
                if(turnArray.length %2 ===0 && turnArray[i] != symptoms[i]){
                    symptoms.push(turnArray[i])
                }
            }else if(diseaseCount >10){ 
                if(turnArray[i] != symptoms[i]){
                    symptoms.push(turnArray[i])
            }
        }
    }  
} 
    
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

function initMap() {
    // Create the map.
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: (selectedCity.area <= 250) ? 13 : (selectedCity.area <= 350) ? 12 : (selectedCity.area <= 500) ? 11 : (selectedCity.area <= 750) ? 10.75 : (selectedCity.area <= 1000) ? 10 : 10.25,
        center: selectedCity.center,
        mapTypeId: 'terrain'
    });
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
    
    let cityCircle0 = new google.maps.Circle({
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35,
    map: map,
    center: {lat:(selectedCity.center.lat + randLatPick),lng:(selectedCity.center.lng + randLngPick)},
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
    
    
    let cityCircle0 = new google.maps.Circle({
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35,
    map: map,
    center: {lat:(selectedCity.center.lat + randLatPick),lng:(selectedCity.center.lng + randLngPick)},
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

///////////////////    T H E   E N D!!!!   ///////////////////
///////////////////    T H E   E N D!!!!   ///////////////////
///////////////////    T H E   E N D!!!!   ///////////////////