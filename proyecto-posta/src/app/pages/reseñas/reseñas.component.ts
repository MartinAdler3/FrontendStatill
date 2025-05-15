import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/shared/header/header.component';
import { FormsModule } from '@angular/forms';

interface Reseña {
  nombre: string;
  estrellas: number;
  comentario: string;
}

@Component({
  selector: 'app-reseñas',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FormsModule],
  templateUrl: './reseñas.component.html',
  styleUrls: ['./reseñas.component.css']
})
export class ReseñasComponent {
  nombre = '';
  estrellas = 5;
  comentario = '';

  reseñas: Reseña[] = [
    { nombre: 'Mati', estrellas: 5, comentario: 'Excelente atención' },
    { nombre: 'Luna', estrellas: 4, comentario: 'Buen surtido de productos' }
  ];

  enviar(): void {
    if (!this.nombre || !this.comentario) return;

    this.reseñas.unshift({
      nombre: this.nombre,
      estrellas: this.estrellas,
      comentario: this.comentario
    });

    this.nombre = '';
    this.estrellas = 5;
    this.comentario = '';
  }
}
