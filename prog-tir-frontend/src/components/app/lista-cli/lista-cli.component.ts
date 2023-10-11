import { Component } from '@angular/core';
import { Cliente } from 'src/models/cliente';
import { ClienteService } from 'src/service/ClienteService/cliente.service';

@Component({
  selector: 'app-lista-cli',
  templateUrl: './lista-cli.component.html',
  styleUrls: ['./lista-cli.component.css']
})
export class ListaCliComponent {

  clienti?: any[];
  showPopup: boolean = false;
  updatedCli: Cliente = new Cliente;
  isLoading = true;

  constructor(private service : ClienteService){}
  ngOnInit() {
  
    this.service.getAllClienti()
    .subscribe(
      data => {
        // La risposta della richiesta HTTP è contenuta in 'data'
        this.clienti = data; // Assegna i dati ricevuti alla variabile 'dipendenti'
      }
    );
    
  }

  openPopup(cliente: Cliente){
    this.showPopup = true;
    this.updatedCli.id = cliente.id;
    this.updatedCli.nome = cliente.nome;
    this.updatedCli.partitaIva = cliente.partitaIva;
    this.updatedCli.telefono = cliente.telefono;    
  }
  closePopup(): void {
    this.showPopup = false;
  }
  
  deleteCli(cliente : Cliente){
    console.log(cliente)
    this.service.deleteCliente(cliente!.id!).subscribe({
      error: (error: any) => {
        console.log(error);
      }
    })
     window.location.reload
  }
  
 
}

  
