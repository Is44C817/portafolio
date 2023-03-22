import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';

import {MatDialogModule} from '@angular/material/dialog';
import { DialogSolisticaComponent } from './components/dialog-solistica/dialog-solistica.component';
import {MatCardModule} from '@angular/material/card';
import { ProfileComponent } from './components/profile/profile.component';
import { DialogHuellaComponent } from './components/dialog-huella/dialog-huella.component';
import { TecnologiasComponent } from './components/tecnologias/tecnologias.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactoComponent,
    ProyectosComponent,
    DialogSolisticaComponent,
    ProfileComponent,
    DialogHuellaComponent,
    TecnologiasComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
