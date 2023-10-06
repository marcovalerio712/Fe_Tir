import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Dipendente } from 'src/models/dipendente';
import { Ruolo } from 'src/models/ruolo';
import { RuoloService } from 'src/service/ruolo.service';

@Component({
  selector: 'app-update-dip',
  templateUrl: './update-dip.component.html',
  styleUrls: ['./update-dip.component.css']
})
export class UpdateDipComponent implements OnInit {
  @Output() closePopup: EventEmitter<void> = new EventEmitter<void>();
  @Input() dipendente? : Dipendente;
  listaRuoli? : Ruolo[];

constructor( private ruoservice : RuoloService){}

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





}
