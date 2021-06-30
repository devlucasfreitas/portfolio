import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../app-routing.module';
import { HeaderComponent } from './header/header.component';
import { SobreComponent } from './sobre/sobre.component';
import { ContatoComponent } from './contato/contato.component';
import { PortfolioAreaComponent } from './portfolio-area/portfolio-area.component';
import { AppSiteComponent } from './app-site/app-site.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SobreComponent,
    ContatoComponent,
    PortfolioAreaComponent,
    AppSiteComponent
  ],
  exports: [
    HeaderComponent,
    SobreComponent,
    ContatoComponent,
    PortfolioAreaComponent,
    AppSiteComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class EstruturaModule { }
