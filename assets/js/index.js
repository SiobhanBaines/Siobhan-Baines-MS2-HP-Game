/*---------------Global variables-------------*/
var i = 0;
var j = 0;
var nextLevel = false;
var start = true;
var delay = 1000;
var playerArray = [];
var crestArray = [];
var winningCrest = "";
let crests = ['g', 's', 'h', 'r'];


/*---------------Begin the Game---------------------*/
$('#play').click(function start() {
    $("#play").hide();
    if (!nextLevel && start) {
        i = 0;
        j = 0;
    }
    playGame();

});
/*------function to light up a house crest----------*/
function playGame() {

    let crest = crests[Math.floor(Math.random() * crests.length)];
    crestArray.push(crest);
    i = crestArray.length - 1;

    console.log(crest);
    console.log(crestArray);

    for (i = 0; i < crestArray.length; i++) {
        console.log(i);
        lightUp(crest);
    };


    $('#gryffindor').click(function gryffindor() {
        playerArray.push('g');
        j++;
        validation();
    });

    $('#slytherin').click(function slytherin() {
        playerArray.push('s');
        j++;
        validation();
    });

    $('#hufflepuff').click(function hufflepuff() {
        playerArray.push('h');
        j++;
        validation();
    });

    $('#ravenclaw').click(function ravenclaw() {
        playerArray.push('r');
        j++;
        validation();
    });
};

/*------function to light up a house crest----------*/
function lightUp(crest) {
    switch (crest) {
        case 'g':
            var element = document.getElementById("gryffindor");
            element.classList.add("gryffindor-red")
            setTimeout(function () {
                element = document.getElementById("gryffindor");
                element.classList.remove("gryffindor-red")
            }, delay);
            break;
        case 's':
            element = document.getElementById("slytherin");
            element.classList.add("slytherin-green");
            setTimeout(function () {
                element = document.getElementById("slytherin");
                element.classList.remove("slytherin-green")
            }, delay);
            break;
        case 'h':
            element = document.getElementById("hufflepuff");
            element.classList.add("hufflepuff-yellow");
            setTimeout(function () {
                element = document.getElementById("hufflepuff");
                element.classList.remove("hufflepuff-yellow")
            }, delay);
            break;
        case 'r':
            element = document.getElementById("ravenclaw");
            element.classList.add("ravenclaw-blue");
            setTimeout(function () {
                element = document.getElementById("ravenclaw");
                element.classList.remove("ravenclaw-blue")
            }, delay);
            break;
        default:
            break;
    }
};

/*------Validate Players Crest Selection -----------*/
function validation() {
    console.log(j);
    console.log(i);
    console.log('playerArray[j]:', playerArray[j]);
    console.log('crestArray[j]:', crestArray[j]);
    console.log('playerArray:', playerArray);
    console.log('crestArray:', crestArray);
    var is_same = (crestArray.length == playerArray.length) && crestArray.every(function(element, index) {
    return element === playerArray[index]; 
    });

    if (is_same) {
        winnerMessage();
    } else if (playerArray[j] !== crestArray[j]) {
        winningCrest = crestArray[j];
        houseMessage();
    } /*else if (playerArray.length !== crestArray.length) {
        break validation;
    }*/
};

/*------function to determine which house won-------*/
function houseMessage() {
    crestArray[j];
    $('#message-board').show();
    switch (winningCrest) {
        case 'g':
            $('section>div>div>div:last').append(`<p class="lost">Gryffindor's bravery is bountious</p>`);
            break;
        case 's':
            $('section>div>div>div:last').append(`<p class="lost">Slytherin's cunning conquers all</p>`);
            break;
        case 'h':
            $('section>div>div>div:last').append(`<p class="lost">Hufflepuff's patience prevails</p>`);
            break;
        case 'r':
            $('section>div>div>div:last').append(`<p class="lost">Ravenclaw's wisdom wins</p>`);
            break;
        default:
            break;
    };

};

/*---function to let the player know they have won--*/
function winnerMessage() {
    $('#gryffindor, #hufflepuff, #slytherin, #ravenclaw, .title').hide();
    $('#dobby').show();
    $('section>div').append(`<p class="win">Dobby thinks you are very clever</p>`);
};

/*---------reset to begin the game again ----------*/
$(document).on('click', '.board', function reStart() {
    $('#message-board').hide();
    let message = document.getElementsByTagName('p')[0];
    message.remove();
    $('#play').show();
    nextLevel = false;
    start = true;

    playGame();
});

/*------play next level of game -------------------*/
$(document).on('click', '#dobby', function nextLevel() {

    $('#gryffindor, #hufflepuff, #slytherin, #ravenclaw, .title').show();
    $('#dobby').hide();
    let message = document.getElementsByTagName('p')[0];
    console.log(message);
    message.remove();
    nextLevel = true;
    start = false;

    playGame();
});











