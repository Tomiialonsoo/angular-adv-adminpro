
/* MODULES */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesRoutingModule } from './pages/pages.routing';

/* COMPONENTS */
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { AuthRoutingModule } from './auth/auth.routing';


  /* DECLARO MIS ROUTES EN UN ARRAY */
  const routes: Routes = [   
    {path: '', redirectTo:'/dashboard', pathMatch:'full'},
    {path: '**', component:NopagefoundComponent},

  ]

  @NgModule({
  imports:[
     RouterModule.forRoot( routes ),
     PagesRoutingModule,
     AuthRoutingModule
   ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
