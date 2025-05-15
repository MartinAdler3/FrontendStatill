import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/shared/header/header.component';

interface PreOrden {
  id: number;
  producto: string;
  estado: 'pendiente' | 'confirmado' | 'cancelado';
  fecha: string;
}

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
  usuario = {
    nombre: 'Admin',
    email: 'admin@statill.com',
    puntos: 120
  };

  preordenes: PreOrden[] = [
    { id: 1, producto: 'Yerba Mate', estado: 'confirmado', fecha: '2025-05-01' },
    { id: 2, producto: 'Fideos', estado: 'pendiente', fecha: '2025-05-10' }
  ];
}
