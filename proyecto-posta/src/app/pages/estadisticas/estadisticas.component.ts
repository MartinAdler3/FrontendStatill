import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-estadisticas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css']
})
export class EstadisticasComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    new Chart('graficoVentas', {
      type: 'bar',
      data: {
        labels: ['Pizza', 'Empanadas', 'Hamburguesas'],
        datasets: [{
          label: 'Ventas semanales',
          data: [12, 19, 7],
          backgroundColor: ['#ff2a2a', '#ff5151', '#ff7979']
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: true },
          title: { display: true, text: 'Estadísticas de consumo' }
        }
      }
    });
  }
}
