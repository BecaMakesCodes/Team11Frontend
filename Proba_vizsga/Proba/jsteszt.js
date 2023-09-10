//Európai unió csatlakozói feladat tesztje




function FuggvenyVisszajelzoSor(tesztNeve, adatBe, elvartEredmeny, fuggvenyhivas) {

    //Tábla elemek létrehozása
    var table = document.querySelector("#testTable");
    var adatSor = table.insertRow(1);
    var tesztNeveMezo = adatSor.insertCell(0);
    var bemenetMezo = adatSor.insertCell(1);
    var elvartEredmenyMezo = adatSor.insertCell(2);
    var fuggvenyEredmenyMezo = adatSor.insertCell(3)
    var visszajelzesMezo = adatSor.insertCell(4)

    //Teszt paraméterek megadása és megjelenítése
    tesztNeveMezo.innerHTML = `${tesztNeve}`;
    bemenetMezo.innerHTML = `${adatBe}`;
    elvartEredmenyMezo.innerHTML = `${elvartEredmeny}`;
    fuggvenyEredmenyMezo.innerHTML = `${fuggvenyhivas}`
    if (elvartEredmeny == fuggvenyhivas) {
        visszajelzesMezo.innerHTML = `Success`;
    }
    else {
        visszajelzesMezo.innerHTML = `Fail`;
    }
}

//Hibás referencia érték esetén lefutó függvény
function HibasFuggvenyFuggvenyVisszajelzoSor(tesztNeve, adatBe, elvartEredmeny) {
    var table = document.querySelector("#testTable");
    var adatSor = table.insertRow(1);
    var tesztNeveMezo = adatSor.insertCell(0);
    var bemenetMezo = adatSor.insertCell(1);
    var elvartEredmenyMezo = adatSor.insertCell(2);
    var fuggvenyEredmenyMezo = adatSor.insertCell(3)
    var visszajelzesMezo = adatSor.insertCell(4)

    tesztNeveMezo.innerHTML = `${tesztNeve}`;
    bemenetMezo.innerHTML = `${adatBe}`;
    elvartEredmenyMezo.innerHTML = `${elvartEredmeny}`;
    fuggvenyEredmenyMezo.innerHTML = "Fail";
    visszajelzesMezo.innerHTML = "Fail";
}

function Teszt01() {
    try {
        FuggvenyVisszajelzoSor("EU csatlakozás", "Objektum", 10, Csatlakozott2004(europaiUnio));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("EU csatlakozás", "Objektum", 10);
    }
}


function Teszt02() {
    try {
        FuggvenyVisszajelzoSor("Víz halmazállapot", -20, "szilard", VizHalmazallapot(-20));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Víz halmazállapot", -20, "szilard");
    }
}
function Teszt03() {
    try {
        FuggvenyVisszajelzoSor("Víz halmazállapot", 42, "folyekony", VizHalmazallapot(42));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Víz halmazállapot", 42, "folyekony");
    }
}
function Teszt04() {
    try {
        FuggvenyVisszajelzoSor("Víz halmazállapot", 120, "legnemu", VizHalmazallapot(120));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Víz halmazállapot", 120, "legnemu");
    }
}


function Teszt05() {
    try {
        FuggvenyVisszajelzoSor("Téglalap kerület", "3 és 5", 16, TeglalapKerulet(3, 5));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Téglalap kerület", "3 és 5", 16);
    }
}
function Teszt06() {
    try {
        FuggvenyVisszajelzoSor("Téglalap kerület", "10 és 12", 44, TeglalapKerulet(10, 12));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Téglalap kerület", "10 és 12", 44);
    }
}
function Teszt07() {
    try {
        FuggvenyVisszajelzoSor("Téglalap kerület", "2 és 5", 14, TeglalapKerulet(2, 5));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Téglalap kerület", "2 és 5", 14);
    }
}
function TesztFuttato() {
    Teszt01();
    Teszt02();
    Teszt03();
    Teszt04();
    Teszt05();
    Teszt06();
    Teszt07();
}
TesztFuttato();