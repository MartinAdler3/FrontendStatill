import { Routes } from '@angular/router';
import { authGuard } from './auth/auth.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
  },
  {
    path: 'login',
    loadComponent: () => import('./auth/login.component').then(m => m.LoginComponent),
  },
  {
    path: 'productos',
    loadComponent: () => import('./pages/productos/productos.component').then(m => m.ProductosComponent),
    canActivate: [authGuard],
  },
  {
    path: 'carrito',
    loadComponent: () => import('./pages/carrito/carrito.component').then(m => m.CarritoComponent),
    canActivate: [authGuard],
  },
  {
    path: 'estadisticas',
    loadComponent: () => import('./pages/estadisticas/estadisticas.component').then(m => m.EstadisticasComponent),
    canActivate: [authGuard],
  },
  {
    path: 'mapa',
    loadComponent: () => import('./pages/mapa/mapa.component').then(m => m.MapaComponent),
    canActivate: [authGuard],
  },
  {
    path: 'descuentos',
    loadComponent: () => import('./pages/descuentos/descuentos.component').then(m => m.DescuentosComponent),
    canActivate: [authGuard],
  },
  {
    path: 'puntos',
    loadComponent: () => import('./pages/puntos/puntos.component').then(m => m.PuntosComponent),
    canActivate: [authGuard],
  },
  {
    path: 'reseñas',
    loadComponent: () => import('./pages/reseñas/reseñas.component').then(m => m.ReseñasComponent),
    canActivate: [authGuard],
  },
  {
    path: 'perfil',
    loadComponent: () => import('./pages/perfil/perfil.component').then(m => m.PerfilComponent),
    canActivate: [authGuard],
  },
  {
    path: '**',
    redirectTo: '',
  }
];
