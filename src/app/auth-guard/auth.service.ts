import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserToken } from '../common/constants';
@Injectable()
export class AuthService {
  constructor(private route: Router) { }
  isAuthenticated() {
    if (localStorage.getItem('token')) {
      return true;
    }
    return false;
  }
  logout() {
    localStorage.removeItem(UserToken);
    this.route.navigate(['/login']);
  }
  setToken(response) {
    console.log(response);

    localStorage.setItem('token', response.token);
  }
  getToken() {
    localStorage.getItem('token');
  }
}

