import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Commessa } from 'src/models/commessa';
import { CommessaService } from 'src/service/CommessaService/commessa.service';

@Component({
  selector: 'app-update-com',
  templateUrl: './update-com.component.html',
  styleUrls: ['./update-com.component.css']
})
export class UpdateComComponent {

  @Output() closePopup: EventEmitter<void> = new EventEmitter<void>();
  @Input() commessa? : Commessa;
  listaCommessa? : Commessa[];

constructor(private comservice : CommessaService){}

  ngOnInit(): void {
    console.log(this.commessa)
   this.comservice.getAllCommesse().subscribe({
    next: (response:Commessa[]) =>{
      console.log(response)
      this.listaCommessa= response;
    } ,
    error: (error:HttpErrorResponse) => {
      alert(error.message)}})
    }


  close(): void {
    this.closePopup.emit();
  } 

  onSubmit(){
    console.log(this.commessa) 
    this.updateCommessa(this.commessa!);

  }
  private updateCommessa(commessa : Commessa){
    this.comservice.updateCommessa(commessa).subscribe({
    next : commessa => {
      console.log(commessa);
      this.commessa = new Commessa;
      window.location.reload();


    },
    error: error => console.log(error)
    });
}

}
