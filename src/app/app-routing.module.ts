import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { CarsrentalComponent } from './projetos/carsrental/carsrental.component';
import { CartaoDePerfilComponent } from './projetos/cartao-de-perfil/cartao-de-perfil.component';
import { LoopstudiosComponent } from './projetos/loopstudios/loopstudios.component';
import { TrackingIntroComponent } from './projetos/tracking-intro/tracking-intro.component';
import { AppSiteComponent } from './estrutura/app-site/app-site.component'; 
import { PortfolioAreaComponent } from './estrutura/portfolio-area/portfolio-area.component';
import { CalculadoraComponent } from './projetos/calculadora/components/calculadora.component';
import { JogoDaVelhaComponent } from './projetos/jogo-da-velha/components/jogo-da-velha.component';

const routes: Routes = [

  { path: '', component: AppSiteComponent },
  { path: 'carsrental', component: CarsrentalComponent },
  { path: 'cartaodeperfil', component: CartaoDePerfilComponent },
  { path: 'loopstudios', component: LoopstudiosComponent },
  { path: 'trackingintro', component: TrackingIntroComponent },
  { path: 'portfolioArea', component: PortfolioAreaComponent },
  { path: 'calculadora', component: CalculadoraComponent },
  { path: 'jogodavelha', component: JogoDaVelhaComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
