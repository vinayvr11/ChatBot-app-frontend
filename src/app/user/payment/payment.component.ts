import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../models/user-model/user-model.model';
import { UserManagementService } from '../../services/user-management/user-management.service';
import { WindowRefService } from '../../services/window-ref/window-ref.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  amount = '';

  constructor(
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {
    this.amount = activateRoute.snapshot.queryParamMap.get('amount');
   }

  ngOnInit(): void {
  }


}
