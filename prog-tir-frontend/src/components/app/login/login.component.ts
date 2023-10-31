import { Token } from '@angular/compiler';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Dipendente } from 'src/models/dipendente';
import { DipendenteService } from 'src/service/DipendenteService/dipendente.service'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  lockImageUrl: string = 'https://cdn-icons-png.flaticon.com/512/7605/7605686.png';
  dipendente: Dipendente= new Dipendente;

  constructor(private dipendenteService: DipendenteService,private router: Router) {}

  onSubmit() {
    const credentials = {
      email: this.dipendente.email,
      password: this.dipendente.password
    };

    this.dipendenteService.login(credentials).subscribe(response => {
      console.log(response)
      if (response && response.token) { 
        sessionStorage.setItem('authToken', response.token);
        sessionStorage.setItem('dipendente', JSON.stringify(response.dipendente))
        console.log(response)
        this.router.navigate(['/home']); 
      }

    });
  }
}
