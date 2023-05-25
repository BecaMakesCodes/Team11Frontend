// 1.feladat
function EkezetesBetukSzama(modositandoSzoveg) {
    var num = 0;
    var array = ["á", "é", "í", "ő", "ú", "ű", "ö", "ó"];
    for (var i = 0; i < modositandoSzoveg.length; i++) {
        for (var j = 0; j < array.length; j++) {
            modositandoSzoveg[i] == array[j] ? num += 1 : null;
        }
        console.log(num);
    }
    return num;
}
EkezetesBetukSzama("Héhéháhá");
// 2.feladat
function camelCaseGenerator(modositandoSzoveg) {
    var space = " ";
    var eredmeny = modositandoSzoveg[0].toUpperCase();
    for (var i = 1; i < modositandoSzoveg.length; i++) {
        if (modositandoSzoveg[i] == space) {
            eredmeny += modositandoSzoveg[i + 1].toUpperCase();
            i++;
        }
    }
    console.log(eredmeny);
    return eredmeny;
}
camelCaseGenerator("Szeretem a programozást.");
