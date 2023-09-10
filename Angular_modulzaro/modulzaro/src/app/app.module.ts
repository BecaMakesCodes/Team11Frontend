import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HosegriadoComponent } from './hosegriado/hosegriado.component';
import { KekturaComponent } from './kektura/kektura.component';
import { HibaComponent } from './hiba/hiba.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HosegriadoComponent,
    KekturaComponent,
    HibaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
