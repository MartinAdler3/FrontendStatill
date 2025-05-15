import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { CarritoService, Producto } from 'src/app/shared/services/carrito.service';
import { HeaderComponent } from 'src/app/shared/header/header.component';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css'] // ya lo tenés; modificalo si querés
})
export class CarritoComponent implements OnInit, OnDestroy {
  carrito: Producto[] = [];
  total = 0;

  private sub?: Subscription;

  constructor(private carritoSrv: CarritoService) {}

  ngOnInit(): void {
    this.sub = this.carritoSrv.carrito$.subscribe(lista => {
      this.carrito = lista;
      this.total = this.carritoSrv.total();
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  quitar(index: number): void {
    this.carritoSrv.remove(index);
  }

  comprar(): void {
    // Por ahora solo vaciamos y mostramos alert
    alert('¡Compra realizada con éxito!');
    this.carritoSrv.clear();
  }
}
