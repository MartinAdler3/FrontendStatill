import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/shared/header/header.component';

@Component({
  selector: 'app-puntos',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './puntos.component.html',
  styleUrls: ['./puntos.component.css']
})
export class PuntosComponent {
  puntosAcumulados = 120;
  objetivo = 200;

  get progreso(): number {
    return Math.min((this.puntosAcumulados / this.objetivo) * 100, 100);
  }

  get faltan(): number {
    return Math.max(this.objetivo - this.puntosAcumulados, 0);
  }
}
