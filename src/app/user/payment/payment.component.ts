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
  planId = '';
  quantity = '';
  orderId = '';
  userSessionData: any;
  amountAccess = 'amount';

  constructor(
    private router: Router,
    private activateRoute: ActivatedRoute,
    private userManagementService: UserManagementService,
    private userModel: UserModel,
    private winRef: WindowRefService
  ) {

    this.userSessionData = JSON.parse(localStorage.getItem('userdata'));
    if (this.userSessionData) {
      if (this.userSessionData.isBuy) {
        alert('You have already buy our bot please contact admins if you want to buy more.');
        this.router.navigate(['/']);
      }
    }
   }

  ngOnInit(): void {
    this.activateRoute.firstChild.params
    .subscribe( param => {
      console.log('orderId', param.id);
      this.amount = param.amount;
      this.planId = param.id;
      this.quantity = param.quantity;
    });

    this.instantiatePaymentData();
  }

  createRzpayOrder() {

    // call api to create order_id
    if (this.orderId) {
      this.payWithRazor(this.orderId);
    }
  }

  payWithRazor(val) {
    console.log('vale', val);
    const options: any = {
      key: 'rzp_test_1VGUCx5bA5SiGQ',
      amount: 125500, // amount should be in paise format to display Rs 1255 without decimal point
      currency: 'INR',
      name: '', // company name or product name
      description: '',  // product description
      image: '', // company logo or product image
      subscription_id: val, // order_id created by you in backend
      modal: {
        // We should prevent closing of the form when esc key is pressed.
        escape: false,
      },
      notes: {
        // include notes if any
      },
      theme: {
        color: '#0c238a'
      }
    };
    options.handler = ((response, error) => {
      options.response = response;
      console.log(response);
      console.log(options);
      if (response.subscription_id && response.payment_id) {
        this.userModel.paymentStatusModel.payment_id = response.razorpay_payment_id;
        this.userModel.paymentStatusModel.subscription_id = response.razorpay_subscription_id;
        this.userModel.paymentStatusModel.signature = response.razorpay_signature;
        this.userModel.paymentStatusModel.company_id = this.userSessionData.company_id;
        this.userManagementService.getPaymentStatus(this.userModel.paymentStatusModel)
        .subscribe((result: any) => {
          if (result.message) {
            localStorage.setItem('userdata', JSON.stringify(result.userData));
            this.router.navigate(['/success']);
          } else {
            const err = 'ERROR:' + result.error;
            alert(err);
          }
        });
      }
      // call your backend api to verify payment signature & capture transaction
    });
    options.modal.ondismiss = (() => {
      // handle the case when user closes the form while transaction is in progress
      console.log('Transaction cancelled.');
    });
    const rzp = new this.winRef.nativeWindow.Razorpay(options);
    rzp.open();
  }


  instantiatePaymentData() {

   if (this.userSessionData) {

        this.userModel.paymentPath.company_id = this.userSessionData.company_id;
        this.userModel.paymentPath.planId = this.planId;
        this.userModel.paymentPath.quantity = this.quantity;
        this.userManagementService.createPlan(this.userModel.paymentPath)

      .subscribe( (data: {id: string, message: string}) => {
        console.log('Your order id ', data);
        if (data.id) {
          this.orderId = data.id;
        } else {
          alert('There is some issue in creating your payment');
        }
      });

    } else {
      alert('Please login first');
      this.router.navigate(['/']);
    }
  }
}
