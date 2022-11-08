import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { DbserviceService } from 'src/app/Servicios/DB/dbservice.service';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.page.html',
  styleUrls: ['./vehiculo.page.scss'],
})
export class VehiculoPage implements OnInit {

  vehiculos: any = [
    {
      matricula: "UV3104",
      modelo: "Kia Carens SLX 2018"
    }
  ]

  constructor(private router: Router, private servicioBD: DbserviceService) {}

  ngOnInit(){
    this.servicioBD.dbState().subscribe((res) =>{
      if(res){
        this.servicioBD.fetchVehiculos().subscribe(item =>{
          this.vehiculos = item;
        })
      }
    });
  }

  getItem($event) {
    const valor = $event.target.value;
    console.log('valor del control: ' + valor);

  }

  agregar() {

  }

  editar(item) {
    this.servicioBD.presentToast("Modificado");
    let navigationextras: NavigationExtras = {
      state : {
        idEnviado : item.id,
        tituloEnviado : item.titulo,
        textoEnviado : item.texto
      }
    }
    this.servicioBD.presentToast("Modificado");
    this.router.navigate(['/modificar'],navigationextras);

  }

  eliminar(item) {
    this.servicioBD.deleteVehiculo(item.id);
    this.servicioBD.presentToast("Vehiculo Eliminado");
  }

}
