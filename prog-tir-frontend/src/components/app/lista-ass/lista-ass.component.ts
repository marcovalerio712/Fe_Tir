import { Component, OnInit } from '@angular/core';
import { Assegnazione } from 'src/models/assegnazione';
import { AssegnazioneService } from 'src/service/AssegnazioneService/assegnazione.service';

@Component({
  selector: 'app-lista-ass',
  templateUrl: './lista-ass.component.html',
  styleUrls: ['./lista-ass.component.css']
})
export class ListaAssComponent implements OnInit {

  assegnazioni?: any[];
  showPopupUpdate: boolean = false;
  updatedAss: Assegnazione = new Assegnazione;

  constructor(private assservice : AssegnazioneService){}
  ngOnInit() {
  
    this.assservice.getAllAssegnazioni()
    .subscribe(
      data => {
        // La risposta della richiesta HTTP è contenuta in 'data'
        this.assegnazioni = data; // Assegna i dati ricevuti alla variabile 'dipendenti'
        console.log(this.assegnazioni);
      }
    );
    
  }

  openPopupUpdate(assegnazione: Assegnazione){
    this.showPopupUpdate = true;
    this.updatedAss.id = assegnazione.id;
    this.updatedAss.commessa = assegnazione.commessa;
    this.updatedAss.competenza = assegnazione.competenza;
    this.updatedAss.dipendente = assegnazione.dipendente;
    this.updatedAss.attivo = assegnazione.attivo;   
  }

  closePopupUpdate(): void {
    this.showPopupUpdate = false;
  }
  
  deleteAss(assegnazione : Assegnazione){
    console.log(assegnazione)
    this.assservice.deleteAssegnazione(assegnazione!.id!).subscribe({
      error: (error: any) => {
        console.log(error);
      }
    })
    window.location.reload
  }



}
