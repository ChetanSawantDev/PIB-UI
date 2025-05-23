import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';
import { AuthInterceptor } from './common/configuration/auth/auth.interceptor';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MessageService } from 'primeng/api';


export const appConfig: ApplicationConfig = {
  providers: [MessageService,provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideHttpClient(),providePrimeNG({
    theme: {
        preset: Aura
    }
    }), importProvidersFrom(BrowserAnimationsModule),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }, provideAnimationsAsync(), provideAnimationsAsync(), provideAnimationsAsync()]
};
