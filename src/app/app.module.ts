import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CargarscriptsService } from './cargarscripts.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    CargarscriptsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  //myscriptElement:HTMLScriptElement;
  constructor(private cargarscr:CargarscriptsService){
    /*this.myscriptElement = document.createElement("script");
    this.myscriptElement.src = "./../assets/Virus.js";
    document.body.appendChild(this.myscriptElement);*/
    cargarscr.Cargar(["Virus"]);
  }
}
