function EkezetesBetukSzama(modositandoSzoveg:string):number{
let ekezetesBetuk:string[] = ["á","é","í","ö","ü","ó","ő","ú","ű"]
let mennyiEkezetesVanBenne = 0;

for(let i:number=0; i<modositandoSzoveg.length;i++){
    for(let j:number=0; j<ekezetesBetuk.length;j++){
        modositandoSzoveg[i] == ekezetesBetuk[j] ? mennyiEkezetesVanBenne+=1 : null;
    }
}
console.log(mennyiEkezetesVanBenne);
return mennyiEkezetesVanBenne;
}
EkezetesBetukSzama("Hálás vagyok azért, hogy tudok tanulni.")