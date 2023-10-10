import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Assegnazione } from 'src/models/assegnazione';
import { AssegnazioneService } from 'src/service/AssegnazioneService/assegnazione.service';

@Component({
  selector: 'app-update-ass',
  templateUrl: './update-ass.component.html',
  styleUrls: ['./update-ass.component.css']
})
export class UpdateAssComponent implements OnInit {

  @Output() closePopup: EventEmitter<void> = new EventEmitter<void>();
  @Input() assegnazione? : Assegnazione;
  listaAssegnazioni? : Assegnazione[];

constructor(private assservice : AssegnazioneService){}

  ngOnInit(): void {
    console.log(this.assegnazione)
   this.assservice.getAllAssegnazioni().subscribe({
    next: (response:Assegnazione[]) =>{
      console.log(response)
      this.listaAssegnazioni= response;
    } ,
    error: (error:HttpErrorResponse) => {
      alert(error.message)}})
    }


  close(): void {
    this.closePopup.emit();
  } 

  onSubmit(){
    console.log(this.assegnazione) 
    this.updateAssegnazione(this.assegnazione!);

  }
  private updateAssegnazione(assegnazione : Assegnazione){
    this.assservice.updateAssegnazione(assegnazione).subscribe({
    next : assegnazione => {
      console.log(assegnazione);
      this.assegnazione = new Assegnazione;
      window.location.reload();


    },
    error: error => console.log(error)
    });
}

}
