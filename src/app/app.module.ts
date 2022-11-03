import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { IonicStorageModule } from '@ionic/storage-angular'; //import del LOCAL-STORAGE
import { HttpClientModule } from '@angular/common/http'; //import del API HTTP
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx'; //Import del SQLITE
import { DBTaskService } from './servicios/dbtask.service';
import { AuthGardService } from './servicios/auth-gard.service';
import { AuthenticationService } from './servicios/authentication.service';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    CommonModule,
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    HttpClientModule, 
    IonicStorageModule.forRoot(),
    
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy}],
  bootstrap: [AppComponent],
  
})
export class AppModule {}

