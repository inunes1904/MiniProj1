import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SPAapp';
  activeNav: string  ='#';

  setActiveNav(s: string) {
    this.activeNav = s;
  }
}
