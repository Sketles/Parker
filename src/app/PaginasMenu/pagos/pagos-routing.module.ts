import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagosPage } from './pagos.page';
import { TarjetaComponent } from '../../tarjeta/tarjeta.component';
import { EfectivoComponent } from '../../efectivo/efectivo.component';

const routes: Routes = [
  {
    path: '',
    component: PagosPage,
    children:[
      {
        path:'tarjeta',
        component: TarjetaComponent,
      },

      {
        path:'efectivo',
        component: EfectivoComponent,
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagosPageRoutingModule {}
