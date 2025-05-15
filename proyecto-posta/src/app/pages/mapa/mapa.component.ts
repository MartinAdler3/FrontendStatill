import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as L from 'leaflet';
import { HeaderComponent } from 'src/app/shared/header/header.component';

@Component({
  selector: 'app-mapa',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {
  map!: L.Map;
  address = '';
  estado = false;
  zoomLevel = 13;

  ngOnInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map('map').setView([-34.6037, -58.3816], this.zoomLevel); // CABA

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(this.map);

    // Marker ejemplo
    L.marker([-34.6037, -58.3816]).addTo(this.map)
      .bindPopup('Local Ejemplo')
      .openPopup();
  }

  buscarDireccion(): void {
    if (!this.address) return;

    const query = encodeURIComponent(this.address);
    fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${query}`)
      .then(res => res.json())
      .then((datos) => {
        if (datos.length > 0) {
          const loc = datos[0];
          const latLng = [parseFloat(loc.lat), parseFloat(loc.lon)] as [number, number];

          this.map.setView(latLng, this.zoomLevel);
          L.marker(latLng).addTo(this.map)
            .bindPopup(this.estado ? 'Mercado' : 'Local')
            .openPopup();
        } else {
          alert('Dirección no encontrada');
        }
      });
  }
}
