import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthCheckService {

  token: string;

  constructor() { }

  isAuthenticate(): boolean {

    this.token = localStorage.getItem('token');
    if (this.token) {
      return true;
    } else {
      return false;
    }

  }

}
