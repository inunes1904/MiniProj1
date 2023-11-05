import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  activeNav: string = '#';
  setActiveNav(value: string) {
    this.activeNav = value;
  }


}
