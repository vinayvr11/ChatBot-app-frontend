import { NgForm } from '@angular/forms';
import { AuthCheckService } from './../../../user/auth-check.service';
import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../../models/user-model/user-model.model';
import { UserManagementService } from '../../../services/user-management/user-management.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  companyId: string;
  userData: any;

  constructor(
    private authCheckService: AuthCheckService,
    private userModel: UserModel,
    private router: Router,
    private userManagementService: UserManagementService
  ) {
    if (authCheckService.isAuthenticate()) {
      this.userData = JSON.parse(localStorage.getItem('userdata'));
      this.companyId = this.userData.company_id;

      if (this.userData.isDemo) {
        // alert('You have already accquired a demo.');
       // this.navigateToMain();

      } else if (this.userData.isBuy) {
       // alert('You have already buy our demo');
        // this.navigateToMain();

      }

    } else {
      alert('Please login first');
      this.navigateToMain();
    }
   }

  ngOnInit() {
  }

  getDemo(form: NgForm) {
    this.userModel.demoModel.company_id = this.companyId;
    this.userModel.demoModel.name = form.value.name;
    this.userModel.demoModel.message = form.value.message;
    this.userModel.demoModel.phone = form.value.phone;

    this.userManagementService.buyDemo(this.userModel.demoModel)
    .subscribe((result: any) => {
      if (result.error) {
        alert(result.error);
        form.reset();
      } else {
        alert(result.message);
        console.log(result);
        localStorage.setItem('userdata', JSON.stringify(result.userData));
        form.reset();
      }
    });

  }

  navigateToMain() {
    this.router.navigate(['/']);
  }

}
