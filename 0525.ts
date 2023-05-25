// 1.feladat

function EkezetesBetukSzama(modositandoSzoveg:string):number{
    let num:number = 0;
    let array:string[] = ["á","é","í","ő","ú","ű","ö","ó"];

    for(let i:number = 0; i<modositandoSzoveg.length; i++){
        for(let j:number = 0; j<array.length; j++){
            modositandoSzoveg[i] == array[j] ? num+=1 : null;  
        }
        console.log(num);
    }
    return num;

}
EkezetesBetukSzama("Héhéháhá");

// 2.feladat

function camelCaseGenerator(modositandoSzoveg:string):string{
    let space:string = " ";
    let eredmeny:string = modositandoSzoveg[0].toUpperCase();
    for(let i:number=1; i<modositandoSzoveg.length;i++){
        if(modositandoSzoveg[i] == space){
            eredmeny += modositandoSzoveg[i+1].toUpperCase();
            i++; 
        }
        else{
            eredmeny += modositandoSzoveg[i];
        }
        
    }
    console.log(eredmeny);
    return eredmeny;
}
camelCaseGenerator("Szeretem a programozást.")

