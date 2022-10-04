import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegooglePage } from './regoogle.page';

const routes: Routes = [
  {
    path: '',
    component: RegooglePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegooglePageRoutingModule {}
