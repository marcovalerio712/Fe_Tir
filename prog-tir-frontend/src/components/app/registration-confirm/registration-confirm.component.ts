import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DipendenteService } from 'src/service/DipendenteService/dipendente.service';

@Component({
  selector: 'app-registration-confirm',
  templateUrl: './registration-confirm.component.html',
  styleUrls: ['./registration-confirm.component.css']
})
export class RegistrationConfirmComponent implements OnInit{

  token?: string | null;
  message: string = 'Test Message';

  constructor(private route: ActivatedRoute, private service: DipendenteService, private router: Router){

  }

  ngOnInit(): void {
    
    this.token = this.route.snapshot.queryParamMap.get('token');

    if(this.token != null)
      this.service.confirmRegistration(this.token).subscribe(
        {
          next: () => {
            this.message = 'Conferma registrazione riuscita!, verrai reindirizzato tra pochi secondi.'
            setTimeout(()=>{
              this.router.navigate(['login']);
            }, 5000);
          },
          error: () => {
            this.message = 'Errore conferma registrazione.'
          }

        }
      );  

  }


}
