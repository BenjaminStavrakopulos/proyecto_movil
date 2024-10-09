import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn: boolean = false;

  constructor() {}


  login(): boolean {
    this.loggedIn = true;
    localStorage.setItem('token', 'your_token_here'); // Simula almacenar un token
    return this.loggedIn;
  }


  logout(): void {
    this.loggedIn = false;
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}
