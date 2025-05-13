import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { MapService } from './map.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  private map!: L.Map;
  estado: boolean = false;
  zoomLevel: number = 0;
  address: string = '';

  iconHome = L.icon({
    iconUrl: 'assets/home-marker.png',
    iconSize: [37.5, 62.5],
    iconAnchor: [18.75, 62.5],
    popupAnchor: [0, -62.5]
  });

  iconMarket = L.icon({
    iconUrl: 'assets/market-marker.png',
    iconSize: [37.5, 62.5],
    iconAnchor: [18.75, 62.5],
    popupAnchor: [0, -62.5]
  });

  constructor(private mapService: MapService) {}

  ngOnInit(): void {
    this.map = L.map('map').setView([-34.5358, -58.4840], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(this.map);

    this.map.on('zoomend', () => {
      this.zoomLevel = this.map.getZoom();
    });

    // Redibuja correctamente después de render
    setTimeout(() => {
      this.map.invalidateSize();
    }, 0);
  }

  buscarDireccion(): void {
    if (!this.address.trim()) return;
    this.mapService.geocode(this.address).subscribe(data => {
      if (data.length > 0) {
        const lat = parseFloat(data[0].lat);
        const lon = parseFloat(data[0].lon);
        const descripcion = data[0].display_name;
        const icon = this.estado ? this.iconMarket : this.iconHome;
        this.map.setView([lat, lon], 13);
        L.marker([lat, lon], { icon }).addTo(this.map).bindPopup(descripcion).openPopup();
      } else {
        alert('No se encontró la dirección.');
      }
    });
  }
}
