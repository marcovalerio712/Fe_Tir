import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ListaDipComponent } from './lista-dip/lista-dip.component';
import { RegistrazioneComponent } from './registrazione/registrazione.component';
import { UpdateDipComponent } from './update-dip/update-dip.component';
import { RegistrationConfirmComponent } from './registration-confirm/registration-confirm.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ListaComComponent } from './lista-com/lista-com.component';
import { ListaCliComponent } from './lista-cli/lista-cli.component';
import { UpdateCliComponent } from './update-cli/update-cli.component';
import { UpdateComComponent } from './update-com/update-com.component';
import { NewDipComponent } from './new-dip/new-dip.component';
import { TimbraturaComponent } from './timbratura/timbratura.component';
import { ListaAssComponent } from './lista-ass/lista-ass.component';
import { UpdateAssComponent } from './update-ass/update-ass.component';
import { TirComponent } from './tir/tir.component';
import { ListaConComponent } from './lista-con/lista-con.component';
import { AuthInterceptor } from './login/interceptor';
import { AssDipComponent } from './ass-dip/ass-dip.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListaDipComponent,
    RegistrazioneComponent,
    UpdateDipComponent,
    RegistrationConfirmComponent,
    HomeComponent,
    NavBarComponent,
    ListaComComponent,
    ListaCliComponent,
    UpdateCliComponent,
    UpdateComComponent,
    NewDipComponent,
    TimbraturaComponent,
    ListaAssComponent,
    UpdateAssComponent,
    TirComponent,


    
    ListaConComponent,
              AssDipComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
