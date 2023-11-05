import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WhoAmIComponent } from './who-am-i/who-am-i.component';
import { WhatIdoComponent } from './what-ido/what-ido.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    WhoAmIComponent,
    WhatIdoComponent,
    HobbiesComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
