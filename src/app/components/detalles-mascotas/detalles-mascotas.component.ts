import { Component, OnInit } from '@angular/core';
import { Mascota } from 'src/app/interfaces/mascota';
import { MascotasServiceService } from 'src/app/services/mascotas-service.service';

@Component({
  selector: 'app-detalles-mascotas',
  templateUrl: './detalles-mascotas.component.html',
  styleUrls: ['./detalles-mascotas.component.css'],
})
export class DetallesMascotasComponent implements OnInit {
  mascota?: Mascota;
  constructor(private msService: MascotasServiceService) {}

  async getInfoContacto() {
    this.msService.getUnaMascota(this.mascota!);
  }

  ngOnInit(): void {
    this.getInfoContacto();
  }
}
