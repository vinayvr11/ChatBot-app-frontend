import { CommonOpsService } from './../../../services/common-methods-management/common-ops.service';
import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../../models/user-model/user-model.model';
import { UserManagementService } from '../../../services/user-management/user-management.service';
import { Router } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-pricing-plan',
  templateUrl: './pricing-plan.component.html',
  styleUrls: ['./pricing-plan.component.scss']
})
export class PricingPlanComponent implements OnInit {

  pricingPlan = '';
  amount = '';
  plans = [];
  quantity = '';

  constructor(
    private router: Router,
    private userManagementService: UserManagementService,
    private commonOpsServices: CommonOpsService
  ) { }

  ngOnInit() {
  }



  onOrderClick(html: HTMLElement, price: HTMLElement) {
    this.pricingPlan = html.innerText.toLocaleLowerCase();
    this.amount = this.commonOpsServices.getPriceRegExp(price.innerText);

    this.userManagementService.getPlans(this.pricingPlan)
    .subscribe( (allPlans: any) => {
      this.plans = [...allPlans.plans];
      this.paymentNavigate(this.plans[0].planId, this.amount, this.plans[0].quantity, this.pricingPlan);
    });
  }

  paymentNavigate(id, amount, quantity, category) {
    this.router.navigate(['/payment', id, amount, quantity, category]);
  }


}


