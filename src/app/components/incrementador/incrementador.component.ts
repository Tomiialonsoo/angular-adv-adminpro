import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
     this.btnCustomClass = `btn ${this.btnCustomClass}`
  }

 @Input('valor') progressBar:number = 40;
 @Input() btnCustomClass:string = 'btn-info';
  
 
 @Output('valor') porcentajeEmitido: EventEmitter<number> = new EventEmitter();

  cambiarValor( porcentaje:number ){
     
    if(this.progressBar >= 100 ){
      this.porcentajeEmitido.emit(100);
      this.progressBar = 100
    }
    if(this.progressBar <= 0 ){
      this.porcentajeEmitido.emit(0);
      this.progressBar = 0
    }
    this.progressBar = this.progressBar + porcentaje;
    this.porcentajeEmitido.emit(this.progressBar)    
  }

}
