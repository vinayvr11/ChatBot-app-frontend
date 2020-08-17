import { Component, HostBinding, OnInit , TemplateRef , Input, EventEmitter, Output, Inject, ViewChild } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { UserModel } from '../../models/user-model/user-model.model';
import { UserManagementService } from '../../services/user-management/user-management.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  @Output() contestdetail: EventEmitter<[]> =   new EventEmitter();
  @HostBinding('class.is-open') @Input()
 


  public onAction: Subject<boolean>;
  questionData = [];
  // tslint:disable-next-line: no-inferrable-types
  MessageModal: boolean = false;
  disableStatus: any;
  mesage: any;
  alertmsg: any;
  alertsDismiss: any = [];
  constructor() { }

  ngOnInit() {
    this.onAction = new Subject();
  }




}
