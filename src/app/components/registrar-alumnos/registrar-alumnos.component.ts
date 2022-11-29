import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GestAlumnosService } from 'src/app/services/gest-alumnos.service';

@Component({
  selector: 'app-registrar-alumnos',
  templateUrl: './registrar-alumnos.component.html',
  styleUrls: ['./registrar-alumnos.component.css'],
})
export class RegistrarAlumnosComponent implements OnInit {
  formulario: FormGroup;
  constructor(private gaService: GestAlumnosService) {
    //formulario para añadir alumnos
    this.formulario = new FormGroup({
      id: new FormControl(),
      nombre: new FormControl(),
      apellido: new FormControl(),
      numero: new FormControl(),
      email: new FormControl(),
    });
  }

  ngOnInit(): void {}
  //metodo para cuando ejecutes el formulario se mande la información
  async onSubmit() {
    await this.gaService.addAlumno(this.formulario.value);
  }
}
