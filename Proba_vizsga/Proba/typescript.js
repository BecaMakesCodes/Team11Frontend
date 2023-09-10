// 1-feladat - Mennyi ékezetes betű van egy szövegben
function EkezetesBetukSzama(vizsgaltSzoveg) {
    var ekezetes = ["á", "é", "í", "ó", "ö", "ő", "ü", "ú", "ű"];
    var szamlalo = 0;
    for (var i = 0; i < vizsgaltSzoveg.length; i++) {
        for (var j = 0; j < ekezetes.length; j++) {
            vizsgaltSzoveg[i] == ekezetes[j] ? szamlalo += 1 : null;
        }
    }
    console.log(szamlalo);
    return szamlalo;
}
EkezetesBetukSzama("Háló");
// 2-feladat
function ElsoNszamSzorzat(mennyiseg) {
    var szorzat = 1;
    for (var i = 2; i <= mennyiseg; i++) {
        szorzat *= i;
    }
    return szorzat;
}
ElsoNszamSzorzat(3);
// 3-feladat
function ParosakOsszege(vizsgaltTomb) {
    var sum = 0;
    vizsgaltTomb.forEach(function (item) {
        item % 2 == 0 ? sum += item : null;
    });
    console.log(sum);
    return sum;
}
ParosakOsszege([12, 3, 21, 4, 6]);
