import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { VehiculosPage } from './vehiculos.page';
import { ComponentesModule } from 'src/app/componentes/componentes.module';
import { ApiService } from 'src/app/Servicios/api.service';
import { HttpClient } from '@angular/common/http';

import { VehiculosPageRoutingModule } from './vehiculos-routing.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentesModule,
    ApiService,
    HttpClient,
    VehiculosPageRoutingModule, 
  ],
  declarations: [VehiculosPage]
})
export class VehiculosPageModule {}
