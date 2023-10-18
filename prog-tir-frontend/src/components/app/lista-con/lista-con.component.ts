import { Component, OnInit } from '@angular/core';
import { TimbraturaComponent } from '../timbratura/timbratura.component';
import { TimbraturaService } from 'src/service/TimbraturaService/timbratura.service';

@Component({
  selector: 'app-lista-con',
  templateUrl: './lista-con.component.html',
  styleUrls: ['./lista-con.component.css']
})
export class ListaConComponent implements OnInit {

  constructor(private cunsuntivoService : TimbraturaService){}
  ngOnInit() {
    
    this.cunsuntivoService.getAllConsuntivi()
    .subscribe(
      data => {
        // La risposta della richiesta HTTP è contenuta in 'data'
        this.consuntivi = data; // Assegna i dati ricevuti alla variabile 'dipendenti'
        console.log(data);
      }
    );
   
  }
  consuntivi?: any[];

}
