import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListaDipComponent } from './lista-dip/lista-dip.component';
import { RegistrazioneComponent } from './registrazione/registrazione.component';
import { UpdateDipComponent } from './update-dip/update-dip.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListaDipComponent,
    RegistrazioneComponent,
    UpdateDipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
