import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  ruolo: string = 'HR';
  ruolo1: string = 'PM';
  ruolo2: string = 'JUNIOR';
  ruolo3: string = 'MIDDLE';
  ruolo4: string = 'SENOR';

}
