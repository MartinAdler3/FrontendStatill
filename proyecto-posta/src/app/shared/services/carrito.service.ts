import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Producto {
  id: number;
  nombre: string;
  precio: number;
}

@Injectable({ providedIn: 'root' })
export class CarritoService {
  private readonly _carrito$ = new BehaviorSubject<Producto[]>([]);

  /** Observable para que los componentes se suscriban */
  readonly carrito$ = this._carrito$.asObservable();

  /** Valor síncrono del carrito */
  private get carrito(): Producto[] {
    return this._carrito$.value;
  }

  /** Agrega un producto al carrito */
  add(producto: Producto): void {
    this._carrito$.next([...this.carrito, producto]);
  }

  /** Elimina un producto por índice */
  remove(index: number): void {
    const copia = [...this.carrito];
    copia.splice(index, 1);
    this._carrito$.next(copia);
  }

  /** Vacía el carrito */
  clear(): void {
    this._carrito$.next([]);
  }

  /** Calcula el total */
  total(): number {
    return this.carrito.reduce((acc, p) => acc + p.precio, 0);
  }
}
