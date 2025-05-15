import { Injectable, computed, inject, signal } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly _isLoggedIn = signal<boolean>(this.checkToken());
  private readonly router = inject(Router);

  readonly isLoggedIn = computed(() => this._isLoggedIn());

  login(username: string, password: string): boolean {
    // Simulación simple (reemplazar con llamada HTTP cuando esté listo el backend)
    if (username === 'admin' && password === '1234') {
      localStorage.setItem('token', 'fake-jwt-token');
      this._isLoggedIn.set(true);
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem('token');
    this._isLoggedIn.set(false);
    this.router.navigate(['/login']);
  }

  private checkToken(): boolean {
    return !!localStorage.getItem('token');
  }
}
