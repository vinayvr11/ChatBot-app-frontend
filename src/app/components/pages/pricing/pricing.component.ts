import { Router } from '@angular/router';
import { UserManagementService } from './../../../services/user-management/user-management.service';
import { CommonOpsService } from './../../../services/common-methods-management/common-ops.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {

  pricingPlan = '';
  amount = '';
  plans = [];
  quantity = '';
  constructor(
    private commonOpsService: CommonOpsService,
    private userManagementService: UserManagementService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onPriceClick(name: HTMLElement, price: HTMLElement) {
    this.pricingPlan = name.innerText.toLocaleLowerCase();
    this.amount = this.commonOpsService.getPriceRegExp(price.innerText);

    this.userManagementService.getPlans(this.pricingPlan)
    .subscribe( (allPlans: any) => {
      this.plans = [...allPlans.plans];
      console.log('User clicked', allPlans);

      this.paymentNavigate(this.plans[0].planId, this.amount, this.plans[0].quantity, this.pricingPlan);
    });
  }

  paymentNavigate(id, amount, quantity, category) {
    this.router.navigate(['/payment', id, amount, quantity, category]);
  }
}
