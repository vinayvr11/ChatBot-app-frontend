import { Component, HostBinding, OnInit , TemplateRef , Input, EventEmitter, Output, Inject, ViewChild } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { UserModel } from '../../models/user-model/user-model.model';
import { UserManagementService } from '../../services/user-management/user-management.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.scss']
})
export class UpdateProfileComponent implements OnInit {




  constructor() { }

  ngOnInit(): void {

  }

}
