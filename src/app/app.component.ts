import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationStart, NavigationCancel, NavigationEnd } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { filter } from 'rxjs/operators';
import { UserModel } from '../app/models/user-model/user-model.model';
import { UserManagementService } from '../app/services/user-management/user-management.service';

declare let $: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [
        Location, {
            provide: LocationStrategy,
            useClass: PathLocationStrategy,
        },
        UserModel,
        UserManagementService
    ]
})
export class AppComponent implements OnInit, OnDestroy {
    location: any;
    routerSubscription: any;
    token: any;
    constructor(private router: Router) {
    }

    ngOnInit() {
        this.recallJsFuntions();
    }

    recallJsFuntions() {
        this.router.events
            .subscribe((event) => {
                if ( event instanceof NavigationStart ) {
                    $('.preloader-area').fadeIn('slow');
                }
                // if ( event instanceof NavigationStart && (this.token == null)) {
                //     this.router.navigate(['/auth/signin'], { queryParams: { returnUrl: '/'}});
                // }
            });
        this.routerSubscription = this.router.events
            .pipe(filter(event => event instanceof NavigationEnd || event instanceof NavigationCancel))
            .subscribe(event => {
                $.getScript('assets/js/custom.js');
                $.getScript('assets/js/conversation.js');
                $('.preloader-area').fadeOut('slow');
                this.location = this.router.url;
                if (!(event instanceof NavigationEnd)) {
                    return;
                }
                window.scrollTo(0, 0);
            });
    }

    ngOnDestroy() {
        this.routerSubscription.unsubscribe();
    }

    logout() {
        this.router.navigate(['/login']);
        localStorage.removeItem('userdetails');
      }
}
