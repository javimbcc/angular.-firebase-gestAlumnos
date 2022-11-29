import { Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  collectionData,
  deleteDoc,
  doc,
  Firestore,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Alumno } from '../interfaces/alumnosInterface';

@Injectable({
  providedIn: 'root',
})
export class GestAlumnosService {
  constructor(private firestore: Firestore) {}

  //Añadir algo a la base de datos
  addAlumno(alumno: Alumno) {
    const ref = collection(this.firestore, 'Alumnos');
    return addDoc(ref, alumno);
  }
  //Recoger la lista de la coleccion para mostrarla
  getAlumno(): Observable<Alumno[]> {
    const ref = collection(this.firestore, 'Alumnos');
    return collectionData(ref, { idField: 'id' }) as Observable<Alumno[]>;
  }
  //Eliminar algo de la coleccion
  deleteAlumno(alumno: Alumno) {
    const ClientDocRef = doc(this.firestore, `Alumnos/${alumno.id}`);
    return deleteDoc(ClientDocRef);
  }
}
