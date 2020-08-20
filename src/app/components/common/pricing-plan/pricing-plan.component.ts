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

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }


  onOrderClick(html: HTMLElement, price: HTMLElement) {
    this.pricingPlan = html.innerText.toLocaleLowerCase();
    this.amount = price.innerText.match(/[0-9]+/g)[0];
    console.log('Order was clicked', this.pricingPlan, price.innerText.match(/[0-9]+/g)[0]);
    this.paymentNavigate();
  }

  paymentNavigate() {
    this.router.navigate(['/payment'], {queryParams: {
        type: this.pricingPlan,
        amount: this.amount
      }});
  }

}
