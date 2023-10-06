import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Dipendente } from 'src/models/dipendente';
import { DipendenteService } from 'src/service/DipendenteService/dipendente.service';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.css']
})
export class RegistrazioneComponent {
  registerUrl: string = 'https://cdn-icons-png.flaticon.com/512/6521/6521996.png';
  dipendente: Dipendente = {}; // Inizializza l'oggetto dipendente vuoto
listaRuoli: any;

  constructor(private dipendenteService: DipendenteService, private router: Router) {}

  onSubmit() {
    this.dipendenteService.registerDipendente(this.dipendente).subscribe(response => {
      console.log('Risposta dal server:', response);
    });
  }
}