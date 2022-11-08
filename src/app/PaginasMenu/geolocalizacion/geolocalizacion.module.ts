import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GeolocalizacionPageRoutingModule } from './geolocalizacion-routing.module';

import { GeolocalizacionPage } from './geolocalizacion.page';
import { ComponentesModule } from '../../componentes/componentes.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GeolocalizacionPageRoutingModule,
    ComponentesModule
  ],
  declarations: [GeolocalizacionPage]
})
export class GeolocalizacionPageModule {}
