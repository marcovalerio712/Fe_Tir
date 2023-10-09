import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cliente } from 'src/models/cliente';
import { ClienteService } from 'src/service/ClienteService/cliente.service';

@Component({
  selector: 'app-update-cli',
  templateUrl: './update-cli.component.html',
  styleUrls: ['./update-cli.component.css']
})
export class UpdateCliComponent implements OnInit {

  @Output() closePopup: EventEmitter<void> = new EventEmitter<void>();
  @Input() cliente? : Cliente;
  listaClienti? : Cliente[];

constructor(private cliservice : ClienteService){}

  ngOnInit(): void {
    console.log(this.cliente)
   this.cliservice.getAllClienti().subscribe({
    next: (response:Cliente[]) =>{
      console.log(response)
      this.listaClienti= response;
    } ,
    error: (error:HttpErrorResponse) => {
      alert(error.message)}})
    }


  close(): void {
    this.closePopup.emit();
  } 

  onSubmit(){
    console.log(this.cliente) 
    this.updateCliente(this.cliente!);

  }
  private updateCliente(cliente : Cliente){
    this.cliservice.updateCliente(cliente).subscribe({
    next : cliente => {
      console.log(cliente);
      this.cliente = new Cliente;
      window.location.reload();


    },
    error: error => console.log(error)
    });
}
}
