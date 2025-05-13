import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { MapComponent } from './map/map.component';
import { AuthGuard } from './auth/auth.guard';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'map', component: MapComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'login' }
];
