import { Component, OnInit } from '@angular/core';
import { Dipendente } from 'src/models/dipendente';
import { Ruolo } from 'src/models/ruolo';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{
dipendente: Dipendente[] = [];
  ruolo: Ruolo[] = [];

  ngOnInit(): void {
  
  


  }
  
  logout(): void {
     
      window.location.replace('login');
    }



}
