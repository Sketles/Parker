import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/Servicios/DB/dbservice.service'; 


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  matriculavehiculo = "";
  modelovehiculo = "";

  constructor(private dbservice: DbserviceService, private router: Router) { }

  guardar() {
    this.dbservice.addVehiculo(this.matriculavehiculo,this.modelovehiculo);
    this.dbservice.presentToast("Vehiculo Agregado");
    this.router.navigate(['/vehiculo']);
  }

  ngOnInit() {
  }

}
