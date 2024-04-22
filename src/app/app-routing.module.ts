import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ComunicadosComponent } from './components/comunicados/comunicados.component';
import { ContactoComponent } from './components/contacto/contacto.component';

const routes: Routes = [
  { path: '', redirectTo: 'portafolio', pathMatch: 'full' },
  { path: 'portafolio', component: ComunicadosComponent },
  { path: '**', redirectTo: 'portafolio', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
