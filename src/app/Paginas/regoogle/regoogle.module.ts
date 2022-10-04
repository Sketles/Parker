import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegooglePageRoutingModule } from './regoogle-routing.module';

import { RegooglePage } from './regoogle.page';
import { ComponentesModule } from '../../componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegooglePageRoutingModule,
    ComponentesModule,
  ],
  declarations: [RegooglePage]
})
export class RegooglePageModule {}
