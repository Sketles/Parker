import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RenumeroPageRoutingModule } from './renumero-routing.module';

import { RenumeroPage } from './renumero.page';
import { ComponentesModule } from '../../componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RenumeroPageRoutingModule,
    ComponentesModule
  ],
  declarations: [RenumeroPage]
})
export class RenumeroPageModule {}
