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
import { ListaAssComponent } from './lista-ass/lista-ass.component';
import { TirComponent } from './tir/tir.component';
import { ListaConComponent } from './lista-con/lista-con.component';
import { HomeComponent } from './home/home.component';
import { AssDipComponent } from './ass-dip/ass-dip.component';

const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch:'full' },
  { path: 'home', component:HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'lista-dip', component: ListaDipComponent },
  { path: 'registration', component: RegistrazioneComponent },
  { path: 'update-dip', component: UpdateDipComponent },
  { path: 'confirm', component: RegistrationConfirmComponent },
  { path: 'lista-com', component: ListaComComponent },
  { path: 'lista-cli', component: ListaCliComponent},
  { path: 'timbratura', component: TimbraturaComponent},
  { path: 'lista-ass', component: ListaAssComponent},
  { path: 'tir', component: TirComponent},
  { path: 'lista-con', component: ListaConComponent},
  { path: 'ass', component: AssDipComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
