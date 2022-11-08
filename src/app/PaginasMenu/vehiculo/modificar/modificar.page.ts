import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { DbserviceService } from 'src/app/Servicios/DB/dbservice.service'; 

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.page.html',
  styleUrls: ['./modificar.page.scss'],
})
export class ModificarPage implements OnInit {

  idvehiculo = "";
  vehiculomatricula = "";
  modelomatricula = "";

  constructor(private router:Router, private activedroute: ActivatedRoute, private dbservice: DbserviceService) {
    this.activedroute.queryParams.subscribe(param =>{
      if(this.router.getCurrentNavigation().extras.state){
        this.idvehiculo = this.router.getCurrentNavigation().extras.state.idEnviado;
        this.vehiculomatricula = this.router.getCurrentNavigation().extras.state.matriculaEnviado;
        this.modelomatricula = this.router.getCurrentNavigation().extras.state.modeloEnviado;
      }
    })
  }

  editar(){
    this.dbservice.updateVehiculo(this.idvehiculo, this.vehiculomatricula,this.modelomatricula);
    this.dbservice.presentToast("Vehiculo Modificado");
    this.router.navigate(['/vehiculo']);
  }

  ngOnInit() {
  }
}
