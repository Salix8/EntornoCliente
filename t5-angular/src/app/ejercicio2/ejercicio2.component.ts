import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio2',
  templateUrl: './ejercicio2.component.html',
  styleUrls: ['./ejercicio2.component.css']
})
export class Ejercicio2Component implements OnInit {

  val2:number = 0;
  val1:number = 0;
  resultado:number = 0;

  constructor() { }

  ngOnInit(): void {

  }

  operacion(){
    this.resultado = this.val1 + this.val2;
    if(this.resultado > 100){

    }
  }

}
