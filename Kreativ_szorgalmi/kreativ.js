
// Első funckió: Ha megnyomom a start gombot, rejtse el az img-eket.
// Note to self: Ha több elemet szeretnék elrejteni egyszerre, nem elég a style.display.
// For ciklusba kell rakni, hogy az összes azonos class/id elemen átmenjen, és az aktuális indexen lévő elemet elrejtse.

// Kör Start + Image elrejtő funkció
let selectButton = document.querySelector('start');

function HideImages() {
    let hideAllImg = document.querySelectorAll('.images');
    for (let i = 0; i < hideAllImg.length; i++) {
        hideAllImg[i].style.display = 'none'
    }

}
start.addEventListener('click', HideImages);


// Kör Reset + Image megjelenítő funkció
let resetButton = document.querySelector('reset');
function RevealImages() {
    /* let revealAllImg = document.querySelectorAll('.images');
     for (let i = 0; i < revealAllImg.length; i++) {
         revealAllImg[i].style.display = "block";
     }*/
    let allImage = new Array();
    allImage[1] = "elephant.png";
    allImage[2] = "octopus.png";
    allImage[3] = "melon.png";
    let randomImage = Math.floor(Math.random() * allImage.length);
    for (let i = 0; i < 7; i++) {
        
        allImage.push(randomImage);
    }
    for (let i = 0; i < allImage.length; i++) {
        document.querySelector('.images').src = allImage[randomImage];
    }
}

reset.addEventListener('click', RevealImages);

// Kártya kiválasztó + megjelenítő funkció

function RevealCardOne() {
    let revealImgOne = document.querySelector("#img1");
    if (revealImgOne.style.display = "none") {
        revealImgOne.style.display = "block";
    }
}
function RevealCardTwo() {
    let revealImgTwo = document.querySelector("#img2");
    if (revealImgTwo.style.display = "none") {
        revealImgTwo.style.display = "block";
    }
}
function RevealCardThree() {
    let revealImgThree = document.querySelector("#img3");
    if (revealImgThree.style.display = "none") {
        revealImgThree.style.display = "block";
    }
}
function RevealCardFour() {
    let revealImgFour = document.querySelector("#img4");
    if (revealImgFour.style.display = "none") {
        revealImgFour.style.display = "block";
    }
}
function RevealCardFive() {
    let revealImgFive = document.querySelector("#img5");
    if (revealImgFive.style.display = "none") {
        revealImgFive.style.display = "block";
    }
}
function RevealCardSix() {
    let revealImgSix = document.querySelector("#img6");
    if (revealImgSix.style.display = "none") {
        revealImgSix.style.display = "block";
    }
}
