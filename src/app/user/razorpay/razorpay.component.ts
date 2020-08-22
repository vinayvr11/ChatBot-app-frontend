import { WindowRefService } from './../../services/window-ref/window-ref.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-razorpay',
  templateUrl: './razorpay.component.html',
  styleUrls: ['./razorpay.component.scss']
})
export class RazorpayComponent implements OnInit {

  constructor(
    private winRef: WindowRefService
  ) { }

  ngOnInit(): void {
  }


}
