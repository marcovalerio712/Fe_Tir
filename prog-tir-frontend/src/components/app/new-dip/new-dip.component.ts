import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Dipendente } from 'src/models/dipendente';
import { Ruolo } from 'src/models/ruolo';
import { DipendenteService } from 'src/service/DipendenteService/dipendente.service';
import { RuoloService } from 'src/service/ruolo.service';

@Component({
  selector: 'app-new-dip',
  templateUrl: './new-dip.component.html',
  styleUrls: ['./new-dip.component.css']
})
export class NewDipComponent implements OnInit {

  @Output() closePopup: EventEmitter<void> = new EventEmitter<void>();
  dipendente?: Dipendente = new Dipendente;
  listaRuoli? : Ruolo[];

constructor( private ruoservice : RuoloService, private service : DipendenteService){}

  ngOnInit(): void {
    console.log(this.dipendente)
   this.ruoservice.getAllRuoli().subscribe({
    next: (response:Ruolo[]) =>{
      console.log(response)
      this.listaRuoli= response;
    } ,
    error: (error:HttpErrorResponse) => {
      alert(error.message)}})
    }


  close(): void {
    this.closePopup.emit();
  } 

  onSubmit(){
    console.log(this.dipendente) 
    this.insertDipendente(this.dipendente!);

  }
  private insertDipendente(dipendente : Dipendente){
    this.service.registerDipendente(dipendente).subscribe({
    next : dipendente => {
      console.log(dipendente);
      this.dipendente = new Dipendente;
      window.location.reload();


    },
    error: error => console.log(error)
    });
  }

}
