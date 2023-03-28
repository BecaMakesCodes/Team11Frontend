
let checkButton = document.querySelector("#aktivalo");
checkButton.onclick = mindenCheck;

function mindenCheck(){
    let elemLista=document.querySelectorAll(".allapot");
    for(let i=0;i<elemLista.length;i++){
        elemLista[i].checked=true;
    }
    this.onclick = mindenUnCheck;
}

function mindenUnCheck(){
    let elemLista=document.querySelectorAll(".allapot");
    for(let i=0;i<elemLista.length;i++){
        elemLista[i].checked=false;
    }
    this.onclick = mindenCheck;
}

//Szorgalmi: Kijelölés megfordítása
//Illetve a két check gomb egy gombra való megírása

let stripesButton = document.querySelector("#csikozasbe");
stripesButton.onclick = CsikozasBe;

function CsikozasBe(){
    let tableObjektum=document.querySelector("table");
    tableObjektum.classList.add("table-striped");
    this.onclick = CsikozasKi;
}


function CsikozasKi(){
    let tableObjektum=document.querySelector("table");
    tableObjektum.classList.remove("table-striped");
    this.onclick = CsikozasBe;
}
//Illetve a két "sávozás" gomb egy gombra való megírása

let darkLightModeButton = document.querySelector("#darkMode");
darkLightModeButton.onclick = LightMode;

function DarkMode(){
    let tableObjektum=document.querySelector("table");
    tableObjektum.classList.remove("table-light");
    tableObjektum.classList.add("table-dark");
    this.onclick = LightMode;
}

function LightMode(){
    let tableObjektum=document.querySelector("table");
    tableObjektum.classList.remove("table-dark");
    tableObjektum.classList.add("table-light");
    this.oclick = DarkMode;
}
//Illetve a két "szín mód" gomb egy gombra való megírása

tesztSor.addEventListener("click",TesztsorBeszuras);
function TesztsorBeszuras(){
    let tableObjektum=document.querySelector("table");
    let sor=tableObjektum.insertRow();
    let vezNevCella=sor.insertCell();
    let kerNevCella=sor.insertCell();
    let emailCella=sor.insertCell();
    let telefonCella=sor.insertCell();
    let beosztasCella=sor.insertCell();
    let aktivalCella=sor.insertCell();

    vezNevCella.innerHTML="teszt";
    kerNevCella.innerHTML="teszt";
    emailCella.innerHTML="teszt";
    telefonCella.innerHTML="teszt";
    beosztasCella.innerHTML="teszt";
    aktivalCella.innerHTML="<input type=\"checkbox\" class=\"allapot\">";
}

/* Funkció, ami az űrlapban lévő adatot
kiválasztja majd feltölti a táblázat megfelelő oszlopába
új sorban, ha rákattolunk a gombra.*/

function InsertFormDataInTable(){
    let tableObject=document.querySelector("table");
    let newRow=tableObject.insertRow();

    let lastNameCol = newRow.insertCell();
    let firstNameCol = newRow.insertCell();
    let emailCol = newRow.insertCell();
    let phoneCol = newRow.insertCell();
    let roleCol = newRow.insertCell();
    let activateCell=newRow.insertCell();

    let lastName = document.querySelector("#veznev").value;
    let firstName = document.querySelector("#kernev").value;
    let email = document.querySelector("#email").value;
    let phone = document.querySelector("#phone").value;
    let role = document.querySelector("#role").value;

    lastNameCol.innerHTML = lastName;
    firstNameCol.innerHTML = firstName;
    emailCol.innerHTML = email;
    phoneCol.innerHTML = phone;
    roleCol.innerHTML = role;
    activateCell.innerHTML="<input type=\"checkbox\" class=\"allapot\">";
}
upload.addEventListener("click", InsertFormDataInTable);