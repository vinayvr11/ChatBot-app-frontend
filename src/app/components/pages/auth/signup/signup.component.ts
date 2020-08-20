import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { UserModel } from '../../../../models/user-model/user-model.model';
import { UserManagementService } from '../../../../services/user-management/user-management.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {


  @ViewChild('successModal') successModal;

  defaultString = 'vr54640@gmail.com';
  values;
  data;
  response: any;
  constructor(
    private services: UserManagementService,
    private userModel: UserModel
    ) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log('Signup success', form.value);

    this.values = form.value;

    this.userModel.signUpModel.email = this.values.email;
    this.userModel.signUpModel.name = this.values.name;
    this.userModel.signUpModel.phone = this.values.phone;
    this.userModel.signUpModel.password = this.values.password;

    this.services.signUp(this.userModel.signUpModel)
    .subscribe( (data: {message: string, error: string}) => {
      console.log('Your subscribe data', data.message);
      if (data.error) {
        console.log('There is an error in fetching the data');
      } else {
        console.log('Your message', data.message);
        alert(data.message);
      }
    });

    form.reset();
  }


}
