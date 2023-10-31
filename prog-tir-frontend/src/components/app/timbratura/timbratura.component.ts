import { Component, OnInit } from '@angular/core';
import { TimbraturaService } from 'src/service/TimbraturaService/timbratura.service';
import { Consuntivo } from 'src/models/consuntivo';
@Component({
  selector: 'app-timbratura',
  templateUrl: './timbratura.component.html',
  styleUrls: ['./timbratura.component.css']
})
export class TimbraturaComponent implements OnInit {
  current? : Date;
  currentDateTime: string = '';
  selectedType: string = '';
  startDate: string = '';
  endDate: string = '';
  startTime: string = '';
  endTime: string = '';
  consuntivi:any[] = [];
  private timer: any;
  timbratura?: Consuntivo;


  constructor(private timbraturaService: TimbraturaService) { }
  ngOnInit() {

 this.timbraturaService.getAllConsuntivi() 
    .subscribe(
      data => {
        // La risposta della richiesta HTTP è contenuta in 'data'
        this.consuntivi = data; // Assegna i dati ricevuti alla variabile 'dipendenti'
        console.log(this.consuntivi);
      }
    );

    this.updateOrario(); // Chiamata iniziale
    this.timer = setInterval(() => {
      this.updateOrario(); // Aggiorna l'orario ogni secondo
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.timer); // Assicurati di cancellare l'intervallo quando il componente viene distrutto
  }

  onTypeChange(event: any): void {
    this.selectedType = event.target.value;
  }
  updateOrario(): void {
    const now = new Date();
    this.currentDateTime = now.toLocaleString();
  }
  

  registraEntrata(): void {
    this.timbratura = new Consuntivo();
    this.current = new Date();
    this.timbratura.orarioInizio = this.current;
    this.timbraturaService!.createConsuntivo(this.timbratura).subscribe({
      next: data => {
        console.log(data)
        window.location.reload()
      },

    })
  }

  registraUscita(): void {
    console.log('Orario di uscita registrato');
  }
}