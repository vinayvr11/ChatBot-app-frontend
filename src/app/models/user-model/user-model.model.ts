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

  paymentPath = {
    quantity: '',
    company_id: '',
    planId: ''
  };

  botIntegrate = {
    company_id: '',
    project_id: '',
    name: '',
    category: '',
    number: '',
    platform: '',
    header: ''
  };

  historyModel = {
    company_id: '',
    project_id: '',
    header: ''
  };


}

