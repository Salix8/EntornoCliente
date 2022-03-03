import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { Ejercicio2Component } from './ejercicio2/ejercicio2.component';
import { EjercicioPruebaComponent } from './ejercicio-prueba/ejercicio-prueba.component';
import { FechaComponent } from './fecha/fecha.component';

@NgModule({
  declarations: [
    AppComponent,
    Ejercicio2Component,
    EjercicioPruebaComponent,
    FechaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
