import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../../../models/user-model/user-model.model';
import { UserManagementService } from '../../../../services/user-management/user-management.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor( ) { }

  ngOnInit() {
  }


}
