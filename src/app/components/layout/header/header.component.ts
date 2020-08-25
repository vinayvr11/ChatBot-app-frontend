import { AuthCheckService } from './../../../user/auth-check.service';
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

    login: boolean;

    constructor(
        private userService: UserManagementService,
        private authCheckService: AuthCheckService
        ) { }

    ngOnInit() {
        if (this.authCheckService.isAuthenticate()) {
            this.login = true;
        } else {
            this.login = false;
        }
    }

}



