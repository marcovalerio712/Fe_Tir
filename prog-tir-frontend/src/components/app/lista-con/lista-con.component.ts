import { Component, OnInit } from '@angular/core';
import { TimbraturaComponent } from '../timbratura/timbratura.component';
import { TimbraturaService } from 'src/service/TimbraturaService/timbratura.service';
import { json } from 'body-parser';
import { Dipendente } from 'src/models/dipendente';

@Component({
  selector: 'app-lista-con',
  templateUrl: './lista-con.component.html',
  styleUrls: ['./lista-con.component.css']
})
export class ListaConComponent implements OnInit {

  constructor(private cunsuntivoService : TimbraturaService){}
  ngOnInit() {
    var ruolo = JSON.parse(sessionStorage.getItem("dipendente")!).ruolo;

    if(ruolo.anzianita == "HR"){
    this.cunsuntivoService.getAllConsuntivi()
    .subscribe(
      data => {
        this.consuntivi = data; 
        console.log(data);
      }
    );
    }else{
      this.cunsuntivoService.getMyConsuntivi().subscribe(
        data => {
          this.consuntivi = data;
        }
      )
    }
  }
  consuntivi?: any[];

}
