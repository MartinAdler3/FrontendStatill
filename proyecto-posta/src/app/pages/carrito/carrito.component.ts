import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  carrito: any[] = [];
  total: number = 0;

  ngOnInit(): void {
    this.carrito = JSON.parse(localStorage.getItem('carrito') || '[]');
    this.total = this.carrito.reduce((sum, item) => sum + item.precio, 0);
  }

  comprar() {
    alert('Compra realizada con éxito 🛍️');
    localStorage.removeItem('carrito');
    this.carrito = [];
    this.total = 0;
  }
}
