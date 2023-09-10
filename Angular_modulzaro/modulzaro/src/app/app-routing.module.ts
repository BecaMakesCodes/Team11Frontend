import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HosegriadoComponent } from './hosegriado/hosegriado.component';
import { KekturaComponent } from './kektura/kektura.component';
import { HibaComponent } from './hiba/hiba.component';

const routes: Routes = [
  {path:"hosegriado",component:HosegriadoComponent},
  {path:"kektura",component:KekturaComponent},
  {path:"",redirectTo:"hosegriado", pathMatch:"full"},
  {path:"**",component:HibaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
