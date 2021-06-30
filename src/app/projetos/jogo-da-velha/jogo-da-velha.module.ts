import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JogoDaVelhaComponent } from './components/jogo-da-velha.component';
import { JogoDaVelhaService } from './services/jogo-da-velha.service';

@NgModule({
  declarations: [
    JogoDaVelhaComponent
  ],
  exports:[
    JogoDaVelhaComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    JogoDaVelhaService
  ]
})
export class JogoDaVelhaModule { }
