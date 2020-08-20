import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserModel {

 signUpModel = {
    name: '',
    email: '',
    phone: '',
    password: ''
  };

  loginModel = {
    email: '',
    password: ''
  };

}
