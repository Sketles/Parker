import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RenumeroPage } from './renumero.page';

const routes: Routes = [
  {
    path: '',
    component: RenumeroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RenumeroPageRoutingModule {}
