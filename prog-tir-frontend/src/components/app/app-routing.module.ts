import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListaDipComponent } from './lista-dip/lista-dip.component';
import { RegistrazioneComponent } from './registrazione/registrazione.component';
import { UpdateDipComponent } from './update-dip/update-dip.component';
import { RegistrationConfirmComponent } from './registration-confirm/registration-confirm.component';

const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch:'full' },
  { path: 'login', component: LoginComponent },
  { path: 'lista-dip', component: ListaDipComponent },
  { path: 'registration', component: RegistrazioneComponent },
  { path: 'update-dip', component: UpdateDipComponent },
  { path: 'confirm', component: RegistrationConfirmComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
