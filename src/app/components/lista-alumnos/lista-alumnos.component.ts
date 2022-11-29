import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/interfaces/alumnosInterface';
import { GestAlumnosService } from 'src/app/services/gest-alumnos.service';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css'],
})
export class ListaAlumnosComponent implements OnInit {
  constructor(private gaService: GestAlumnosService) {}
  listaAlumnos?: Alumno[];
  //Metodo para recoger los alumnos
  getAlumnos() {
    this.gaService.getAlumno().subscribe((alumno) => {
      this.listaAlumnos = alumno;
    });
  }

  //metodo para eliminar alumnos
  async deleteAlumnos(alumno: Alumno) {
    await this.gaService.deleteAlumno(alumno);
  }

  ngOnInit(): void {
    //Iniciamos los metodos
    this.getAlumnos();
  }
}
