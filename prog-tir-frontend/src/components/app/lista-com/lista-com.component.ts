import { Component, OnInit } from '@angular/core';
import { Commessa } from 'src/models/commessa';
import { CommessaService } from 'src/service/CommessaService/commessa.service';

@Component({
  selector: 'app-lista-com',
  templateUrl: './lista-com.component.html',
  styleUrls: ['./lista-com.component.css']
})
export class ListaComComponent implements OnInit{
  commesse?: any[];
  showPopup: boolean = false;
  updateComm: Commessa = new Commessa;

  constructor(private commessaService : CommessaService){}
  ngOnInit() {
  
    this.commessaService.getAllCommesse()
    .subscribe(
      data => {
        // La risposta della richiesta HTTP è contenuta in 'data'
        this.commesse = data; // Assegna i dati ricevuti alla variabile 'dipendenti'
        console.log(data);
      }
    );
  }

  openPopup(commessa: Commessa){
    this.showPopup = true;
    this.updateComm.id = commessa.id;
    this.updateComm.tipo = commessa.tipo;
    this.updateComm.durata = commessa.durata;
    this.updateComm.descrizione = commessa.descrizione;
    this.updateComm.importoContratto = commessa.importoContratto;
    this.updateComm.dataInizio = commessa.dataInizio;
    this.updateComm.dataFine = commessa.dataFine;
    this.updateComm.cliente = commessa.cliente;
    this.updateComm.attivo = commessa.attivo;
    
  }
  closePopup(): void {
    this.showPopup = false;
  }
  
  deleteDip(commessa : Commessa){
    console.log(commessa)
    this.commessaService.deleteCommessa(commessa!.id!).subscribe({
      error: (error: any) => {
        console.log(error)
       ;
      }
    })
     window.location.reload
  }
  
  
}

