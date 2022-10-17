import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-renumero',
  templateUrl: './renumero.page.html',
  styleUrls: ['./renumero.page.scss'],
})

export class RenumeroPage {

  usuario={ usuario:"", matricula:"" }

    constructor(private router: Router) { }

    nombreusuario(){
      let navigationExtras: NavigationExtras = {
        state: {usuario: this.usuario}
      };
      this.router.navigate(['/home'],navigationExtras);
    }
}
