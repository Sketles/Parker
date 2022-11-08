import { ApiService } from 'src/app/Servicios/API/api.service';
import { Component, OnInit } from '@angular/core';
import { IonRouterOutlet } from '@ionic/angular';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.page.html',
  styleUrls: ['./vehiculos.page.scss'],
})
export class VehiculosPage implements OnInit {

  constructor(private api: ApiService ,  private routerOutlet: IonRouterOutlet) { }

  goBack() { this.routerOutlet.pop(); }

  createPost(){
    var post={
      title: 'titulo prueba',
      body: 'algun cuerpo del post',
      userId: 11
    }
    this.api.createPost(post).subscribe(
      (success)=>
        {console.log(success);},
      error=>
        {console.log(error);
    })
  }

  getPosts(){
    this.api.getPosts().subscribe(
      (success)=>
        {console.log(success);},
      error=>
        {console.log(error);})
  }

  getPost(){
    var id:number = 2;
    this.api.getPost(id).subscribe(
      (success)=>
        {console.log(success);},
      error=>
        {console.log(error);})
  }


  deletePost(){
    var id:number = 5;
    this.api.deletePost(id).subscribe(
      (success)=>
        {console.log(success);},
      error=>
        {console.log
          (error);})
  }


  updatePost(){
    var id:number = 2;
    var post={
      title: 'titulo modificado',
      body: 'algun cuerpo del post modificado',
      userId: 11
    }
    this.api.updatePost(id,post).subscribe(
      (success)=>
        {console.log(success);},
      error=>
        {console.log(error);}
    )
  }

  ngOnInit() {}

}
