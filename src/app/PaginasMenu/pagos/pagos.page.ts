import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router' ;

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.page.html',
  styleUrls: ['./pagos.page.scss'],
})
export class PagosPage implements OnInit {

  constructor(private router: Router) { }

  segmentChanged($event){
    console.log($event.detail.value);
    let direction=$event.detail.value;
    this.router.navigate(['pagos/'+direction]);
  }
  /**
   * Antes de que se muestre la visual
   * se redirecciona a la url especifica
   */
  ionViewWillEnter(){
    this.router.navigate(['pagos/tarjeta']);
  }

  ngOnInit() {
  }

}
