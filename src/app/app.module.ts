import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ListaAlumnosComponent } from './components/lista-alumnos/lista-alumnos.component';
import { RegistrarAlumnosComponent } from './components/registrar-alumnos/registrar-alumnos.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ListaAlumnosComponent,
    RegistrarAlumnosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
