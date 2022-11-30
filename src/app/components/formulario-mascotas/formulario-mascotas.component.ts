import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MascotasServiceService } from 'src/app/services/mascotas-service.service';

@Component({
  selector: 'app-formulario-mascotas',
  templateUrl: './formulario-mascotas.component.html',
  styleUrls: ['./formulario-mascotas.component.css'],
})
export class FormularioMascotasComponent implements OnInit {
  formulario: FormGroup;
  constructor(private mService: MascotasServiceService) {
    //formulario para añadir alumnos
    this.formulario = new FormGroup({
      id: new FormControl(),
      nombre: new FormControl(),
      edad: new FormControl(),
      especie: new FormControl(),
      propietario: new FormControl(),
      raza: new FormControl(),
      sexo: new FormControl(),
    });
  }

  ngOnInit(): void {}
  async onSubmit() {
    await this.mService.addMascota(this.formulario.value);
  }
}
