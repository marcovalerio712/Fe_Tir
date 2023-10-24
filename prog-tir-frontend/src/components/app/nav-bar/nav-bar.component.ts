import { Component } from '@angular/core';
import { Dipendente } from 'src/models/dipendente';
import { Ruolo } from 'src/models/ruolo';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  dipendente: Dipendente[] = [];
  ruolo: Ruolo[] = [];



}
