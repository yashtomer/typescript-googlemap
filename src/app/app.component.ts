import { Component, OnInit, ViewChild } from '@angular/core';
import $ from 'jquery';
import {} from 'googlemaps';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'agm';
  map: google.maps.Map;
  ngOnInit(): void {
    let mapOptions: google.maps.MapOptions = {
      backgroundColor: '#fff',
      center: { lat: 28.625, lng: 77.37 },
      clickableIcons: true,
      controlSize: 30,
      draggable: true,
      fullscreenControl: true,
      fullscreenControlOptions: {
        position: google.maps.ControlPosition.RIGHT_TOP
      },
      gestureHandling: 'cooperative',
      restriction: {
        latLngBounds: { east: 180, west: -180, north: 85, south: -85 },
        strictBounds: true
      },
      scrollwheel: true,
      styles: [
        {
          elementType: 'geometry',
          featureType: 'water',
          stylers: [
            {
              color: '#00bdbd'
            }
          ]
        },
        {
          elementType: 'geometry',
          featureType: 'landscape.man_made',
          stylers: [
            {
              color: '#f7f1df'
            }
          ]
        }
      ],
      zoom: 4
    };

    /***** Create map *****/
    let map: google.maps.Map = new google.maps.Map(document.getElementById('map'), mapOptions);
  }
}
