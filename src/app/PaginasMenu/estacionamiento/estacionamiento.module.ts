import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstacionamientoPageRoutingModule } from './estacionamiento-routing.module';

import { EstacionamientoPage } from './estacionamiento.page';
import { ApiService } from '../../Servicios/API/api.service';
import { HttpClient } from '@angular/common/http';
import { ComponentesModule } from 'src/app/componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstacionamientoPageRoutingModule,
    ApiService,
    HttpClient,
    ComponentesModule, 
  ],
  declarations: [EstacionamientoPage]
})
export class EstacionamientoPageModule {}
