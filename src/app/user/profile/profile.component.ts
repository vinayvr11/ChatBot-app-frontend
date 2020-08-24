import { UserManagementService } from './../../services/user-management/user-management.service';
import { UserModel } from './../../models/user-model/user-model.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  // User Info Model
  name = 'vinay';
  username = '';
  companyname = '';
  website = '';
  email = '';
  phone = '';

  // User data var
  data: any;
  header: string;
  // Dynamically sets element property
  readonly: boolean;

  constructor(
    private router: Router,
    private userModel: UserModel,
    private userManagementService: UserManagementService
  ) {
    this.data = JSON.parse(localStorage.getItem('userdata'));
    this.header = localStorage.getItem('token');
    console.log(this.data);
    if (this.data) {
      this.assignUserData(this.data);
    } else {
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    this.readonly = true;
  }

  // Assign User data
  assignUserData(data) {
    this.name = data.name;
    this.phone = data.phone;
    this.email = data.email;
    this.website = data.companyUrl;
    this.username = data.username;
    this.companyname = data.companyName;
  }

  onEditProfile() {
    if (!this.readonly) {
      this.readonly = true;
    } else {
      this.readonly = false;
    }
  }

  onUpdateProfile(name, phone, website, company) {

    this.userModel.updateBody.name =  name.value;
    this.userModel.updateBody.company_name = company.value;
    this.userModel.updateBody.company_url = website.value;
    this.userModel.updateBody.phone = phone.value;
    this.userModel.updateBody.company_id = this.data.company_id;
    this.userModel.updateBody.header = this.header;

    this.userManagementService.updateProfile(this.userModel.updateBody)
    .subscribe((result: any) => {
      console.log(result);
      if (result.message) {
        localStorage.setItem('userdata', JSON.stringify(result.userData));
        this.assignUserData(result.userData);
        this.readonly = true;
      } else {
        alert('Server Error In Updating User Profile');
      }
    });
  }

}
