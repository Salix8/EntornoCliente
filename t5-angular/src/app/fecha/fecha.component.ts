import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fecha',
  templateUrl: './fecha.component.html',
  styleUrls: ['./fecha.component.css']
})
export class FechaComponent implements OnInit {
  
  fechaActual:Date = new Date();
  
  constructor() { }
  
  ngOnInit(): void {
    this.fecha();
  }
  
  fecha(){
    this.fechaActual.getDay();
  }

}
