const selectNumbers = document.querySelectorAll('[data-operand]')
const selectOperations = document.querySelectorAll('[data-operation')
const selectAllClear = document.querySelector('[data-all-clear]')
const selectSemiColon = document.querySelector('[data-semi-colon]')
const selectEquals = document.querySelector('[data-equals]')
const selectScreen = document.querySelector('[data-screen]')

const allNumbersArray = [1,2,3,4,5,6,7,8,9]
function takeInputFromUser(inputNumber){
    if(inputNumber == allNumbersArray){
        selectScreen = inputNumber;
    }
}