import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingComponent } from './loading/loading.component';
import { IonicModule } from '@ionic/angular';
import { BackbotonComponent } from './backboton/backboton.component';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [
    LoadingComponent,
    BackbotonComponent,
    MenuComponent
  ],
  exports: [
    LoadingComponent,
    BackbotonComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentesModule { }
