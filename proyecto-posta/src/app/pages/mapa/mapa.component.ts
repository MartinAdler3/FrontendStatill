import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../../shared/components/header/header.component';


@Component({
  selector: 'app-mapa',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent], // ✅ IMPORTADO CORRECTAMENTE
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements AfterViewInit {
  address: string = '';
  estado: boolean = false;
  zoomLevel: number = 3;

  private map: any;

  ngAfterViewInit(): void {
    this.initMap();
  }

  initMap(): void {
    this.map = L.map('map').setView([0, 0], this.zoomLevel);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(this.map);

    this.map.on('zoomend', () => {
      this.zoomLevel = this.map.getZoom();
    });
  }

  buscarDireccion(): void {
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(this.address)}&addressdetails=1`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.length > 0) {
          const lat = parseFloat(data[0].lat);
          const lon = parseFloat(data[0].lon);
          const description = data[0].display_name;

          const iconito = this.estado ? this.marketIcon() : this.homeIcon();

          this.map.setView([lat, lon], 13);
          this.addMarker(lat, lon, description, iconito);
        } else {
          alert('No se encontró la dirección. Intenta otra vez.');
        }
      })
      .catch(error => {
        alert('Hubo un error al buscar la dirección.');
        console.error(error);
      });
  }

  addMarker(lat: number, lon: number, descripcion: string, icono: any): void {
    L.marker([lat, lon], { icon: icono }).addTo(this.map).bindPopup(descripcion).openPopup();
  }

  homeIcon(): L.Icon {
    return L.icon({
      iconUrl: 'assets/home-marker.png',
      iconSize: [37.5, 62.5],
      iconAnchor: [18, 62.5],
      popupAnchor: [0, -62.5]
    });
  }

  marketIcon(): L.Icon {
    return L.icon({
      iconUrl: 'assets/market-marker.png',
      iconSize: [37.5, 62.5],
      iconAnchor: [18, 62.5],
      popupAnchor: [0, -62.5]
    });
  }
}
