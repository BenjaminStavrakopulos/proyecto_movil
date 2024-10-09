import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service'; // Asegúrate de importar el servicio de autenticación

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    const isAuthenticated = false; // Cambia esto a la lógica de autenticación real
    if (!isAuthenticated) {
      this.router.navigate(['/login']); // Redirige a login si no está autenticado
      return false;
    }
    return true;
    }
  }

