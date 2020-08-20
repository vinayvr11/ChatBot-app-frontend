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
  data = '';

  constructor(
    private router: Router
  ) {
    this.data = JSON.parse(localStorage.getItem('userdata'));
    console.log(this.data);
    if (this.data) {
      this.assignUserData(this.data);
    } else {
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
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

}
