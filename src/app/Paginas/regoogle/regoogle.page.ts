import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-regoogle',
  templateUrl: './regoogle.page.html',
  styleUrls: ['./regoogle.page.scss'],
})


export class RegooglePage {

    usuario={ usuario:"", matricula:"" }

    constructor(private router: Router) { }

    nombreusuario(){
      let navigationExtras: NavigationExtras = {
        state: {usuario: this.usuario}
      };
      this.router.navigate(['/home'],navigationExtras);
    }
}
