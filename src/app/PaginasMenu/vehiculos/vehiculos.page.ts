import { Component } from '@angular/core';
import { ApiService } from 'src/app/Servicios/api.service';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.page.html',
  styleUrls: ['./vehiculos.page.scss'],
})
export class VehiculosPage {

  arrayPosts:any;

  constructor(public api: ApiService) {}


  ionViewDidLoad() {
    this.getPosts();//Llamamos a la función getPost cuando la vista se cargue
  }

  getPosts() { //llamamos a la funcion getPost de nuestro servicio.
    this.api.getPosts()
    .then(data => {
      this.arrayPosts = data;
    });
  }


}