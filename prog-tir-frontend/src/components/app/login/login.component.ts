import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Dipendente } from 'src/models/dipendente';
import { DipendenteService } from 'src/service/DipendenteService/dipendente.service'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  dipendente: Dipendente= new Dipendente;

  constructor(private dipendenteService: DipendenteService,private router: Router) {}

  onSubmit() {
    // Esegui l'azione di login quing
    const credentials = {
      email: this.email,
      password: this.password
    };

    this.dipendenteService.login(credentials).subscribe(response => {
      // Gestisci la risposta del server o reindirizza l'utente
      console.log('Risposta dal server:', response);
    });
  }
}
