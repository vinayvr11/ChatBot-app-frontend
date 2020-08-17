import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-two',
  templateUrl: './header-two.component.html',
  styleUrls: ['./header-two.component.scss']
})


export class HeaderTwoComponent implements OnInit {
  token: any;
  userdetail = true;
  pricing = 'pricing';
  solution = 'solution';
  footermine = 'footermine';
  platformin = 'platformin';
  leadgeneration = 'leadgeneration';
  customersupport = 'customersupport';
  appointment = 'appointment';
      constructor(
        private location: Location,
        private router: Router ) { }
      ngOnInit() {
          this.isAuthenticated();
          this.userdetail = this.isAuthenticated();
      }
      isAuthenticated() {
          // get the auth token from localStorage
          // tslint:disable-next-line: prefer-const
          let userdetails = JSON.parse(localStorage.getItem('userdetails'));
          if (userdetails == null || userdetails.token == null) {
            this.token = 0;
              } else {
                this.token = userdetails.token;
              }
          const token = this.token;
          // const token = localStorage.getItem('access_token');
          // check if token is set, then...
          if (token) {
              return true;
          }
          return false;
        }
        scroll(id): void {
          console.log(id);
          const el: HTMLElement|null = document.getElementById(id);
          if (id) {
            console.log(id);
            // tslint:disable-next-line: prefer-const
            let elmnt = document.getElementById(id);
            elmnt.scrollIntoView({ behavior: 'auto' , block: 'start', inline: 'nearest'});
            // (id).scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
          }
        }
  }
