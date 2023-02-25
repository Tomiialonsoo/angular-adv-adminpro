/* MODULOS */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

/* COMPONENTES */
import { ProgressComponent } from './progress/progress.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { AppRoutingModule } from '../app-routing.module';
import { PagesComponent } from './pages.component';



@NgModule({
  declarations: [
    ProgressComponent,
    DashboardComponent,
    Grafica1Component,
    PagesComponent,
  ],
  exports:[
    ProgressComponent,
    DashboardComponent,
    Grafica1Component,
    PagesComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule
  ]
})

export class PagesModule { }
