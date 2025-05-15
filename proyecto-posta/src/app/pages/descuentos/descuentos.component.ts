import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/shared/header/header.component';

interface ProductoDescuento {
  id: number;
  nombre: string;
  precioOriginal: number;
  descuento: number; // en porcentaje
}

@Component({
  selector: 'app-descuentos',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './descuentos.component.html',
  styleUrls: ['./descuentos.component.css']
})
export class DescuentosComponent {
  productos: ProductoDescuento[] = [
    { id: 1, nombre: 'Yerba Mate', precioOriginal: 5000, descuento: 20 },
    { id: 2, nombre: 'Galletitas', precioOriginal: 2500, descuento: 10 },
    { id: 3, nombre: 'Fideos Spaghetti', precioOriginal: 1200, descuento: 15 }
  ];

  getPrecioFinal(p: ProductoDescuento): number {
    return p.precioOriginal * (1 - p.descuento / 100);
  }
}
