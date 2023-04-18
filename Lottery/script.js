// Generate 6 random numbers
// Between 1-45
// No duplicates

let generateBtn = document.querySelector("#generate");
let arrayOfRandomNums = [];
let random;
function GenerateSixNumbers() {

    for (let i = 0; i < 6; i++) {
        let isDuplicate = false;
        random = Math.round(Math.random() * (44) + 1);

        for (let j = 0; j < arrayOfRandomNums.length; j++) {
            if (random == arrayOfRandomNums[j]) {
                isDuplicate = true;
            }
        }

        if (isDuplicate == false) {
            arrayOfRandomNums.push(random);
        }
        else {
            i--;
        }
    }

    return arrayOfRandomNums;



}
generate.addEventListener("click", GenerateSixNumbers);


// Display numbers on the 6 positions

function DisplayNumbersOnPositions() {
    let allPositions = document.querySelectorAll("#position");
        for (let i = 0; i < allPositions.length; i++) {
            allPositions[i].innerHTML = arrayOfRandomNums[i];
        }
    

}
generate.addEventListener("click", DisplayNumbersOnPositions);


// Integrate a function that colors the number if it's the same as the generated number

function ColorNumber() {
    let selectTD = document.getElementsByTagName("td");
    let contentOfTD;
    for (let i = 0; i < arrayOfRandomNums.length; i++) {
        for (let j = 0; j < selectTD.length; j++) {
            contentOfTD = selectTD[j].innerHTML;
            if (arrayOfRandomNums[i] == contentOfTD) {
                selectTD[j].style.backgroundColor = "#62C4C3";
                selectTD[j].style.color = "white";
            }
        }
    }

}
generate.addEventListener("click", ColorNumber);

// Calculate the most common number

let mostCommon = document.querySelector("#most");
let newArray = [];
function CalculateMostCommonNum() {
for(let i=0; i<arrayOfRandomNums.length; i++){
    newArray.push(arrayOfRandomNums[i]);
    for(let j=0; j<newArray.length; j++){
        if(newArray[j] == arrayOfRandomNums[i]){
            mostCommon.innerHTML = "Most Common Number: " + newArray[j];
        }
    }
}

}
generate.addEventListener("click", CalculateMostCommonNum);

// Calculate the least common number

let leastCommon = document.querySelector("#least");
let newArrayLeast =[];
function CalculateLeastCommonNum(){
    for(let i=0; i<arrayOfRandomNums.length; i++){
        newArrayLeast.push(arrayOfRandomNums[i]);
        for(let j=0; j<newArrayLeast.length; j++){
            if(newArrayLeast[j] != arrayOfRandomNums[i]){
                leastCommon.innerHTML = "Most Common Number: " + newArrayLeast[j];
            }
        }  
}
}
generate.addEventListener("click", CalculateLeastCommonNum);

// Empty array
function ResetArray() {
    arrayOfRandomNums = [];
}
generate.addEventListener("click", ResetArray);




