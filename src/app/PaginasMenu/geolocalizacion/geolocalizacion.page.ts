import { Component } from '@angular/core';
import { Geolocation,Geoposition } from '@awesome-cordova-plugins/geolocation/ngx';

@Component({
  selector: 'app-geolocalizacion',
  templateUrl: './geolocalizacion.page.html',
  styleUrls: ['./geolocalizacion.page.scss'],
})
export class GeolocalizacionPage {

  lati;
  long;

  constructor(public geolocation: Geolocation) { }

  ngAfterViewInit(){
    this.getGeolocation();
  }

  getGeolocation(){
    this.geolocation.getCurrentPosition().then((resp) => {
      console.log("Respuesta Geolocalización", resp)
      this.lati = resp.coords.latitude;
      this.long = resp.coords.longitude;
     }).catch((error) => {
       console.log('Error getting location', error);
     });
     
     let watch = this.geolocation.watchPosition();
     watch.subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
      // data.coords.latitude
      // data.coords.longitude
     });
  }

}
