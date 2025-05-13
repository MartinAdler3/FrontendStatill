import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideNoopAnimations } from '@angular/platform-browser/animations'; // ❗ usamos Noop

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideNoopAnimations(), // ❗ desactiva animaciones para evitar errores
    provideRouter(appRoutes)
  ]
};
