import { AfterViewInit, Component, inject } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/shared/header/header.component';

@Component({
  selector: 'app-estadisticas',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css']
})
export class EstadisticasComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    // Datos simulados: nombre de producto y cantidad vendida
    const datos = [
      { nombre: 'Yerba Mate', cantidad: 25 },
      { nombre: 'Fideos', cantidad: 18 },
      { nombre: 'Salsa', cantidad: 12 }
    ];

    new Chart('graficoVentas', {
      type: 'bar',
      data: {
        labels: datos.map(d => d.nombre),
        datasets: [{
          label: 'Unidades vendidas',
          data: datos.map(d => d.cantidad),
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: { stepSize: 5 }
          }
        }
      }
    });
  }
}
