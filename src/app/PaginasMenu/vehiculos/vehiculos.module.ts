import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VehiculosPageRoutingModule } from './vehiculos-routing.module';

import { VehiculosPage } from './vehiculos.page';
import { ApiService } from '../../Servicios/API/api.service';
import { HttpClient } from '@angular/common/http';
import { ComponentesModule } from 'src/app/componentes/componentes.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VehiculosPageRoutingModule,
    ApiService,
    HttpClient,
    ComponentesModule,
    
  ],
  declarations: [VehiculosPage]
})
export class VehiculosPageModule {}
