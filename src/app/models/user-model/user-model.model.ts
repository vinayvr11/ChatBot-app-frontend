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
    name: '',
    email: 'vr54640@gmail.com'
  };

}
