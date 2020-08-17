import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../../models/user-model/user-model.model';
import { UserManagementService } from '../../../services/user-management/user-management.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pricing-plan',
  templateUrl: './pricing-plan.component.html',
  styleUrls: ['./pricing-plan.component.scss']
})
export class PricingPlanComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


}
