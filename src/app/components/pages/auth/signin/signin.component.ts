
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


  constructor(private userService: UserManagementService) {}

  ngOnInit() {

  }

  onSubmit(form: NgForm) {
    console.log('Form data', form.value);
  }


}
