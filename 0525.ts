// 1. Feladat: Csekkolni, hány ékezetes betű van a bemeneti stringben

function EkezetesBetukSzama(modositandoSzoveg:string):number{
let ekezetesBetuk:string[] = ["á","é","í","ö","ü","ó","ő","ú","ű"]
let mennyiEkezetesVanBenne:number = 0;

for(let i:number=0; i<modositandoSzoveg.length;i++){
    for(let j:number=0; j<ekezetesBetuk.length;j++){
        modositandoSzoveg[i] == ekezetesBetuk[j] ? mennyiEkezetesVanBenne+=1 : null;
    }
}
console.log(mennyiEkezetesVanBenne);
return mennyiEkezetesVanBenne;
}
EkezetesBetukSzama("Szeretem a programozást és a kakaót is.")

// 2. Feladat: A bemeneti stringből csináljunk egy camelCase szöveget: Szeretem a programozást => szeretemAProgramozást

function camelCaseGenerator(modositandoSzoveg:string):string{
let ujSzoveg:string = modositandoSzoveg[0].toLowerCase();
for(let i:number=1; i<modositandoSzoveg.length;i++){
    if(modositandoSzoveg[i] == " "){
        ujSzoveg += modositandoSzoveg[i+1].toUpperCase();
        i++;
    }
    else{
        ujSzoveg += modositandoSzoveg[i];
    }
    //modositandoSzoveg[i] == " " ? ujSzoveg += modositandoSzoveg[i+1].toUpperCase() : ujSzoveg += modositandoSzoveg[i];
}
console.log(ujSzoveg);
return ujSzoveg;
}
camelCaseGenerator("Álmos vagyok és szeretnék izélni.");

// 3. Feladat Kiratni a prímszámokat a vizsgált tömbben. Ha nincs, akkor írja ki, hogy nincs prímszám a tömbben

function PrimLista(vizsgaltTomb:number[]):number[]{
    let igazHamis:boolean = true;
    let primSzamok:number[] = [];
    for(let i:number=0; i<vizsgaltTomb.length;i++){
        if(vizsgaltTomb[i] == 2){
            igazHamis = true;
            primSzamok.push(vizsgaltTomb[i]);
        }
        else if(vizsgaltTomb[i]%2==0){
            igazHamis = false;
            i++;
        }
        else{
            igazHamis = true;
            primSzamok.push(vizsgaltTomb[i]);
        }
    }
    console.log(primSzamok);
    return primSzamok;
}
PrimLista([2,7,3,13,4,6,11,17,15]);