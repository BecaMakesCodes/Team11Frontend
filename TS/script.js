// 2.feladat
function TombgGenerator(meret, alsoHatar, felsoHatar) {
    var array = [];
    for (var i = 0; i < meret; i++) {
        var random = Math.floor(Math.random() * (felsoHatar - alsoHatar + 1)) + alsoHatar;
        array.push(random);
    }
    return array;
}
function Duplazo(vizsgaltTomb) {
    console.log(vizsgaltTomb);
    var newArray = [];
    vizsgaltTomb.forEach(function (item) {
        var newValue = item * 2;
        newArray.push(newValue);
    });
    return newArray;
}
;
console.log(Duplazo(TombgGenerator(8, 1, 20)));
/*
Certainly! The formula Math.random() * (felsoHatar - alsoHatar + 1)) + alsoHatar is used to generate a random number within a specified range.

Math.random() generates a random floating-point number between 0 (inclusive) and 1 (exclusive). This is the basis for generating random numbers.

(felsoHatar - alsoHatar + 1) calculates the range of numbers between alsoHatar and felsoHatar. Let me break it down:

felsoHatar - alsoHatar calculates the size of the range.
+1 is added to include the upper bound of the range. Without this, the upper bound wouldn't be part of the possible values.
Finally, alsoHatar is added to the result to shift the range to start from alsoHatar.

So, the entire formula essentially does the following:

Calculates the size of the range between alsoHatar and felsoHatar (inclusive of both bounds).
Generates a random floating-point number between 0 and 1.
Multiplies that random number by the size of the range to distribute it across the entire range.
Adds alsoHatar to this result to shift the range to start from alsoHatar.
This way, you get a random number within the specified range, inclusive of both alsoHatar and felsoHatar. */ 
