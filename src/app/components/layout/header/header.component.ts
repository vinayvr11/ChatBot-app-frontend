import { UserManagementService } from './../../../services/user-management/user-management.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    constructor(private userService: UserManagementService) { }

    ngOnInit() {

    }

    getSignIn() {
        console.log(this.userService.getUserData());
      }
}



