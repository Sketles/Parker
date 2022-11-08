import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstacionamientoPage } from './estacionamiento.page';

const routes: Routes = [
  {
    path: '',
    component: EstacionamientoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstacionamientoPageRoutingModule {}
