import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListaDipComponent } from './lista-dip/lista-dip.component';
import { RegistrazioneComponent } from './registrazione/registrazione.component';
import { UpdateDipComponent } from './update-dip/update-dip.component';
import { RegistrationConfirmComponent } from './registration-confirm/registration-confirm.component';
import { ListaComComponent } from './lista-com/lista-com.component';
import { ListaCliComponent } from './lista-cli/lista-cli.component';
import { TimbraturaComponent } from './timbratura/timbratura.component';

const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch:'full' },
  { path: 'login', component: LoginComponent },
  { path: 'lista-dip', component: ListaDipComponent },
  { path: 'registration', component: RegistrazioneComponent },
  { path: 'update-dip', component: UpdateDipComponent },
  { path: 'confirm', component: RegistrationConfirmComponent },
  { path: 'lista-com', component: ListaComComponent },
  { path: 'lista-cli', component: ListaCliComponent},
  { path: 'timbratura', component: TimbraturaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
