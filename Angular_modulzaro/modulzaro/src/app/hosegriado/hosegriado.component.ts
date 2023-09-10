import { Component } from '@angular/core';

@Component({
  selector: 'app-hosegriado',
  templateUrl: './hosegriado.component.html',
  styleUrls: ['./hosegriado.component.css']
})
export class HosegriadoComponent {
first:number = 30;
second:number = 31;
third:number = 32;
megoldas:string[] = [];

AktualisRiadoSzint():number{
let celsius:number;
if(this.first || this.second || this.third === 25){
   celsius = 0;
}
else if(this.first && this.second && this.third === 25){
   celsius = 1;
}
else{
  celsius = 2;
}
return celsius;
}
EredmenyMentes():void{
this.megoldas.push(`${this.first},${this.second} és ${this.first} esetén ${this.AktualisRiadoSzint()}. szintű hőségriadó volt elrendelve`)
}
}
