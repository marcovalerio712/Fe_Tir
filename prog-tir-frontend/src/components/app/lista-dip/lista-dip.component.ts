import { Component } from '@angular/core';
import { DipendenteService } from 'src/service/DipendenteService/dipendente.service';

@Component({
  selector: 'app-lista-dip',
  templateUrl: './lista-dip.component.html',
  styleUrls: ['./lista-dip.component.css']
})
export class ListaDipComponent {
  dipendenti?: any[];

  constructor(private dipendenteService : DipendenteService){}
  ngOnInit() {
    // Chiamata al metodo getAllDipendenti del servizio
    this.dipendenteService.getAllDipendenti()
    .subscribe(
      data => {
        // La risposta della richiesta HTTP è contenuta in 'data'
        this.dipendenti = data; // Assegna i dati ricevuti alla variabile 'dipendenti'
      }
    );
  }
}
