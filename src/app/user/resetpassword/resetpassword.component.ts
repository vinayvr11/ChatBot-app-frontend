import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../models/user-model/user-model.model';
import { UserManagementService } from '../../services/user-management/user-management.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


}
