import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaAlumnosComponent } from './components/lista-alumnos/lista-alumnos.component';
import { RegistrarAlumnosComponent } from './components/registrar-alumnos/registrar-alumnos.component';

const routes: Routes = [
  { path: 'alumnos', component: ListaAlumnosComponent },
  { path: 'añadir-alumno', component: RegistrarAlumnosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
