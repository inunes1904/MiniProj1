import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {WhoAmIComponent} from "./who-am-i/who-am-i.component";
import {HobbiesComponent} from "./hobbies/hobbies.component";
import {HomeComponent} from "./home/home.component";
import {WhatIdoComponent} from "./what-ido/what-ido.component";

const routes: Routes = [
  { path:'', component:HomeComponent},
  {component:WhatIdoComponent, path:'what-i-do'},
  {component:WhoAmIComponent, path:'who-am-i'},
  {component:HobbiesComponent, path:'hobbies'},
]


@NgModule({
  imports: [
    RouterModule.forRoot(
      routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
