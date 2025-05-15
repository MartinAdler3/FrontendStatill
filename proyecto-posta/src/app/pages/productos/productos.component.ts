import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../shared/header/header.component';
import { CarritoService, Producto } from '../../shared/services/carrito.service';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  productos: Producto[] = [
    { id: 1, nombre: 'Yerba Mate 1 kg', precio: 5000 },
    { id: 2, nombre: 'Fideos Spaghetti', precio: 1200 },
    { id: 3, nombre: 'Salsa de Tomate', precio: 950 }
  ];

  constructor(private carrito: CarritoService) {}

  agregar(producto: Producto): void {
    this.carrito.add(producto);
  }
}
