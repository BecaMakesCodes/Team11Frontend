"use strict";
/*// Implicit konverzió - A gép fordítja le magától
var progNyelv = "Javascript";

// Explicit konverzió
var progNyelv2:string = "Typescript";

// Általános típusok
var szam:number = 21;
var szoveg:string = "Hali";
var logika:boolean = true;

//VAR
// A typescript nem engedi a var újra deklarálását más typuson

//any
var barmi:any=true;
barmi=5;
barmi="Hali";

//unknown
var ismeretlen:unknown=true;
ismeretlen = 5;

// Tömbök létrehozása
var szovegesTomb:string[]=["alma", "körte", "barack"]

// Generate a random number, then determine if even or not

var num:number = Math.round(Math.random()*10);

if(num%2==0){
    console.log(`The number ${num} is even.`);
   
}
else{
    console.log(`The number ${num} is odd.`);
}

// Generate a random number, then determine if prim or not
var num_two:number = Math.round(Math.random()*10);

if(num_two%2==0 || num_two%3==0 || num_two%5==0){
    console.log(`The number ${num_two} is NOT prime.`)
}
else{
    console.log(`The number ${num_two} is prime`);
}

function ILoveTypeScript():void{                // void kell ha sima eéljárás, és nincs return érték
    console.log("Szeretem a Typescriptet!");
}

function NegyzetKer(aOldal:number):void{
    console.log(`A ${aOldal} oldalú négyzet kerülete: ${aOldal*4}`);
}
function NegyzetTerulet(aOldal:number):number{  // A második :number a return értékének a típusát határozza meg
    return aOldal*4;
}*/
Object.defineProperty(exports, "__esModule", { value: true });
/*function GenerateArray():void{
    var tomb:any = [];
    for(let i=0; i<10; i++){
        var randomNumbers:any = Math.round(Math.random()*10);
        console.log(randomNumbers);
        tomb.push(randomNumbers);
    }
    console.log(tomb);
}
*/
/*
function CountEvenNumbers(array:any){
    let evenNumbers:any = [];
    for(let i=0; i<array.length;i++){
        if(array[i]%2==0){
            evenNumbers.push(array[i]);
        }
    }
    return evenNumbers;
}
let valami = CountEvenNumbers([2,3,5,7,6]);
console.log(valami);
*/
/*
function GiveBackStringOnGrade(grade:number){
    if(grade==5){
        console.log("Példás.");
    }
    else if(grade==4){
        console.log("Jó.");
    }
    else if(grade==3){
        console.log("Változó.");
    }
    else if(grade==2){
        console.log("Hanyag");
    }
}
GiveBackStringOnGrade(3);
*/
/*
function DiakInfo(nev:string, csoport:number, tipus:boolean){
    if(tipus==true){
        console.log(nev + " " + "[Team" + csoport + "]" + " - " + "Junior Frontend");
    }
    else{
        console.log(nev + " " + "[Team" + csoport + "]" + " - " + "Webfejlesztő");
    }
    
}
DiakInfo("Perle Rebeka",11,true);

function SzovegesErtekeles(jegy:number){
    let szorgalom;
    let magatartas;

    if(jegy==5){
        szorgalom = "Példás"
        magatartas = "Példás"
    }
    else if(jegy==4){
        szorgalom = "Jó"
        magatartas = "Jó"
    }
    else if(jegy==3){
        szorgalom = "Változó"
        magatartas = "Változó"
    }
    else if(jegy==2){
        szorgalom = "Hanyag"
        magatartas = "Rossz"
    }
    console.log(szorgalom, magatartas);
}
SzovegesErtekeles(2);

function HarommalOszthatokSzama(tomb:any){
    let divByThree:any = [];
for(let i=0; i<tomb.length;i++){
    if(tomb[i]%3==0){
        divByThree.push(tomb[i]);
    }
    
    
}
console.log(divByThree.length);
}
HarommalOszthatokSzama([10,12,18,30]);


function Nyeroszamok(mennyiseg:number, alsoHatar:number, felsohatar:number){
for(let i=0;i<mennyiseg;i++){
    let random:number = Math.round(Math.random()*100);
    if(random<felsohatar && random>alsoHatar){
        console.log(random);
    }
    else{
        i--;
    }
}
}
Nyeroszamok(10,1,90);
*/
// Hibás kód elemzés
var arrayOfNums = [2, 4, 8, 17, 9, 23, 6, 42, 120, 2];
function Max(array) {
    var num = 0;
    for (var i = 1; i < array.length; i++) {
        num = array[0]; // Mivel a for cikluson belül adtam meg az értéket, így minden alkalommal a 0. indexen lévő értéket fogja felvenni
        num < array[i] ? num = array[i] : i++; // Nem kell növelnem az i értékét 1-el, csak hagyni hogy fusson tovább a for ciklus
    }
    console.log(array.indexOf(num));
    console.log(num);
    return [num, array.indexOf(num)];
}
Max(arrayOfNums);