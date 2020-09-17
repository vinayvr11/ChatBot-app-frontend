
import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../../../models/user-model/user-model.model';
import { UserManagementService } from '../../../../services/user-management/user-management.service';
import { Router } from '@angular/router';
import { ForgotPasswordComponent } from '../../../../dialog/forgot-password/forgot-password.component';
import { NgForm } from '@angular/forms';
import {
  BsModalService,
  BsModalRef,
  } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  public spinner: boolean = false
  constructor(
    private userService: UserManagementService,
    private userModel: UserModel,
    private router: Router,
    
    ) {}

  ngOnInit() {

  }

  onSubmit(form: NgForm) {

    this.userModel.loginModel.email = form.value.email;
    this.userModel.loginModel.password = form.value.password;

    this.userService.signIn(this.userModel.loginModel)
    .subscribe( (data: any) => {

      if (data.message) {
        console.log(data.userData);
        localStorage.setItem('token', data.token);
        localStorage.setItem('userdata', JSON.stringify(data.userData));
        this.navProfile();
        this.spinner = !this.spinner
      } else {
        console.log(data);
      }

    });

    console.log('Form data', form.value);
  }


  navProfile() {
    this.router.navigate(['/profile']);
  }

}
