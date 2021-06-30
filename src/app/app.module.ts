import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstruturaModule } from './estrutura/estrutura.module';
import { CarsrentalComponent } from './projetos/carsrental/carsrental.component';
import { TrackingIntroComponent } from './projetos/tracking-intro/tracking-intro.component';
import { CartaoDePerfilComponent } from './projetos/cartao-de-perfil/cartao-de-perfil.component';
import { LoopstudiosComponent } from './projetos/loopstudios/loopstudios.component';
import { CalculadoraModule } from './projetos/calculadora/calculadora.module';
import { JogoDaVelhaModule } from './projetos/jogo-da-velha/jogo-da-velha.module';



@NgModule({
  declarations: [
    AppComponent,
    CarsrentalComponent,
    TrackingIntroComponent,
    CartaoDePerfilComponent,
    LoopstudiosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CalculadoraModule,
    EstruturaModule,
    JogoDaVelhaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
