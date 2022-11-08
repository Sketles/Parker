import { Component, ViewChildren } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewChild, ElementRef } from '@angular/core';
import { Geolocation,Geoposition } from '@awesome-cordova-plugins/geolocation/ngx';


declare var google: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  map: any;

  @ViewChild('map', {read: ElementRef, static: false}) mapRef: ElementRef;

  constructor() { }


  //-----------------------API GOOGLE MAPS----------------------------------//
  ionViewDidEnter(){
    this.showMap();
  }

  showMap(){
    const location = new google.maps.LatLng(-33.36355749279399, -70.67821198064264);
    const options = {
      center: location,
      zoom: 15,
      disableDefaultUI: true
    }
    this.map = new google.maps.Map(this.mapRef.nativeElement, options);
  } //-----------------------API GOOGLE MAPS----------------------------------//
  
}
