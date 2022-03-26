import { Router } from '@angular/router';
import { Observable, throwError, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  isLoggedIn() {
    const userData = localStorage.getItem('user');
    if (userData) {
      return true;
    } else {
      return false;
    }
  }

  login(data: any): Observable<any> {
    if (this.isLoggedIn()) {
      return of(data);
    } else {
      return throwError(new Error('Failed to login'));
    }
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
}
