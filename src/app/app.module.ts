import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx'; //Import del SQLITE
import { HttpClientModule } from '@angular/common/http'; //import del API HTTP
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx'; //import del Geolocation


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    HttpClientModule, 
 
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy}, SQLite, Geolocation ],
  bootstrap: [AppComponent],
  
})
export class AppModule {}

