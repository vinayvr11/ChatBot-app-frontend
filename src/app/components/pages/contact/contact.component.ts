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


  constructor() { }

  ngOnInit() {
  }


}
