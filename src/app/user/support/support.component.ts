import { Component, OnInit , Output , EventEmitter} from '@angular/core';
import { UserModel } from '../../models/user-model/user-model.model';
import { UserManagementService } from '../../services/user-management/user-management.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent implements OnInit {

  constructor(
    private userManagementService: UserManagementService,
    private userModel: UserModel
  ) { }

  ngOnInit(): void {

  }

  sendMail(form: NgForm) {
    this.userModel.mailbody.name = form.value.name;
    this.userModel.mailbody.email = form.value.email;
    this.userModel.mailbody.phone = form.value.phone;
    this.userModel.mailbody.message = form.value.message;
    this.userModel.mailbody.subject = form.value.subject;

    this.userManagementService.sendMail(this.userModel.mailbody)
    .subscribe((result: any) => {
      console.log(result);
      if (result.message) {
        alert(result.message);
      } else {
        alert(result.error);
      }
    });
  }


}
