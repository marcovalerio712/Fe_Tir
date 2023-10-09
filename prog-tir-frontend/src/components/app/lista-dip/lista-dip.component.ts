import { Component, OnInit } from '@angular/core';
import { Dipendente } from 'src/models/dipendente';
import { DipendenteService } from 'src/service/DipendenteService/dipendente.service';

@Component({
  selector: 'app-lista-dip',
  templateUrl: './lista-dip.component.html',
  styleUrls: ['./lista-dip.component.css']
})
export class ListaDipComponent implements OnInit{
  dipendenti?: any[];
  showPopupUpdate: boolean = false;
  updatedDip: Dipendente = new Dipendente;

  constructor(private dipendenteService : DipendenteService){}
  ngOnInit() {
  
    this.dipendenteService.getAllDipendenti()
    .subscribe(
      data => {
        // La risposta della richiesta HTTP è contenuta in 'data'
        this.dipendenti = data; // Assegna i dati ricevuti alla variabile 'dipendenti'
      }
    );
  }

  openPopupUpdate(dipendente: Dipendente){
    this.showPopupUpdate = true;
    this.updatedDip.id = dipendente.id;
    this.updatedDip.nome = dipendente.nome;
    this.updatedDip.cognome = dipendente.cognome;
    this.updatedDip.cf = dipendente.cf;
    this.updatedDip.email = dipendente.email;
    this.updatedDip.password = dipendente.password;
    this.updatedDip.telefono = dipendente.telefono;
    this.updatedDip.registrato = dipendente.registrato;
    this.updatedDip.ruolo = dipendente.ruolo;
    this.updatedDip.attivo = dipendente.attivo;
    
  }

  closePopupUpdate(): void {
    this.showPopupUpdate = false;
  }
  
  deleteDip(dipendente : Dipendente){
    console.log(dipendente)
    this.dipendenteService.deleteDipendente(dipendente!.id!).subscribe({
      error: (error: any) => {
        console.log(error);
      }
    })
     window.location.reload
  }
  
  
}
