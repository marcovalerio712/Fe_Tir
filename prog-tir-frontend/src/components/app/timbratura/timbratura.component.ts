import { Component, OnInit } from '@angular/core';
import { TimbraturaService } from 'src/service/TimbraturaService/timbratura.service';
import { Consuntivo } from 'src/models/consuntivo';
@Component({
  selector: 'app-timbratura',
  templateUrl: './timbratura.component.html',
  styleUrls: ['./timbratura.component.css']
})
export class TimbraturaComponent implements OnInit {

  currentDateTime: string = '';
  selectedType: string = '';
  startDate: string = '';
  endDate: string = '';
  startTime: string = '';
  endTime: string = '';
  consuntivi:any[] = [];

  constructor(private timbratura: TimbraturaService) { }

  ngOnInit(): void {
    this.updateOrario();
    this.timbratura.getAllConsuntivi().subscribe(data => {
      this.consuntivi = data;
    });

    
    
  }
  onTypeChange(event: any): void {
    this.selectedType = event.target.value;
  }
  updateOrario(): void {
    const now = new Date();
    this.currentDateTime = now.toLocaleString();
  }
  

  regitraEntrata(): void {
    
    console.log('Orario di entrata registrato');
  }

  regitraUscita(): void {
    console.log('Orario di uscita registrato');
  }
}