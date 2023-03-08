 /*let selectCardOne = document.querySelector("#card1");
    let selectCardTwo = document.querySelector("#card2");
    let selectCardThree = document.querySelector("#card3");
    let selectCardFour = document.querySelector("#card4");
    let selectCardFive = document.querySelector("#card5");
    let selectCardSix = document.querySelector("#card6");*/

// Első funckió: Ha megnyomom a start gombot, rejtse el az img-eket.
// Note to self: Ha több elemet szeretnék elrejteni egyszerre, nem elég a style.display.
// For ciklusba kell rakni, hogy az összes azonos class/id elemen átmenjen, és az aktuális indexen lévő elemet elrejtse.

// Image elrejtő funkció
let selectButton = document.querySelector('.btn-start');

function HideImages(){
   let hideAllImg = document.querySelectorAll('.images');
   for (let i=0;i<hideAllImg.length;i++){
    hideAllImg[i].style.display = 'none'
}
}
selectButton.addEventListener('click', HideImages);


// Image megjelenítő funkció
let resetButton = document.querySelector('.btn-reset');
function RevealImages(){
    let revealAllImg = document.querySelectorAll('.images');
    for(let i=0; i<revealAllImg.length; i++){
        revealAllImg[i].style.display = "block";
    }
}
function RandomizeImagePosition(){
    let selectImgOne = document.querySelector("#img1");
    let selectCardTwo = document.querySelector("#card2");
    let selectCardThree = document.querySelector("#card3");
    let selectCardFour = document.querySelector("#card4");
    let selectCardFive = document.querySelector("#card5");
    let selectCardSix = document.querySelector("#card6");
    
    let srcValue = selectImgOne.getAttribute("src");
    if(srcValue.valueOf = "elephant.png"){
        srcValue.valueOf = "octopus.png";
    }
    else if(srcValue = "octopus.png"){
        srcValue = "melon.png";
    }
    else if(srcValue = "melon.png"){
        srcValue = "elephant.png";
    }
    }

resetButton.addEventListener('click', RandomizeImagePosition );

