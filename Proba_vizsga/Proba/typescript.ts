// 1-feladat - Mennyi ékezetes betű van egy szövegben

function EkezetesBetukSzama(vizsgaltSzoveg:string):number{
let ekezetes:string[] = ["á","é","í","ó","ö","ő","ü","ú","ű"];
let szamlalo:number = 0;
for(let i:number=0; i<vizsgaltSzoveg.length; i++){
    for(let j:number=0; j<ekezetes.length;j++){
        vizsgaltSzoveg[i] == ekezetes[j] ? szamlalo+=1 : null;
    }
}
console.log(szamlalo);
return szamlalo;
}
EkezetesBetukSzama("Háló");

// 2-feladat

function ElsoNszamSzorzat(mennyiseg:number):number{
let szorzat:number = 1;
for(let i:number = 2; i<=mennyiseg; i++){
    szorzat *= i;
}
return szorzat;
}
ElsoNszamSzorzat(3);

// 3-feladat

function ParosakOsszege(vizsgaltTomb:number[]):number{
let sum:number = 0;
vizsgaltTomb.forEach(item =>{
    item%2==0 ? sum+=item : null;
});
console.log(sum);
return sum;
}
ParosakOsszege([12,3,21,4,6]);