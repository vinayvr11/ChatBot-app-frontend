import { NgModule , Injectable  } from '@angular/core';
import { Routes, RouterModule , CanActivate , Router } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { HomeTwoComponent } from './components/pages/home-two/home-two.component';
import { HomeThreeComponent } from './components/pages/home-three/home-three.component';
import { AboutComponent } from './components/pages/about/about.component';
import { PricingComponent } from './components/pages/pricing/pricing.component';
import { TeamComponent } from './components/pages/team/team.component';
import { FeaturesComponent } from './components/pages/features/features/features.component';
import { FeaturesOneComponent } from './components/pages/features/features-one/features-one.component';
import { FeaturesTwoComponent } from './components/pages/features/features-two/features-two.component';
import { AuthComponent } from './components/pages/auth/auth/auth.component';
import { SignupComponent } from './components/pages/auth/signup/signup.component';
import { SigninComponent } from './components/pages/auth/signin/signin.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { BlogComponent } from './components/pages/blog/blog/blog.component';
import { BlogGridComponent } from './components/pages/blog/blog-grid/blog-grid.component';
import { BlogSidebarComponent } from './components/pages/blog/blog-sidebar/blog-sidebar.component';
import { BlogDetailsComponent } from './components/pages/blog/blog-details/blog-details.component';
import { ContactComponent } from './components/pages/contact/contact.component';

import { SupportComponent } from './user/support/support.component';
import { UserManagementService } from '../app/services/user-management/user-management.service';
import { PaymentComponent } from './user/payment/payment.component';
import { SuccessComponent } from './user/success/success.component';
import { ResetpasswordComponent } from './user/resetpassword/resetpassword.component';
@Injectable()
export class AuthGuard implements CanActivate {

    // tslint:disable-next-line: variable-name
    base_url: string;

    constructor(
        private userManagementService: UserManagementService,
        private router: Router
        ) {}

    canActivate() {
        // Check to see if a user has a valid token


        // If not, they redirect them to the login page
        this.router.navigate(['/auth/signin']);
        return false;
    }




}
const routes: Routes = [
    { path: '', component: HomeComponent },

    { path: 'support',  canActivate: [AuthGuard], component: SupportComponent },
    { path: 'success',  canActivate: [AuthGuard], component: SuccessComponent },

    { path: 'resetpassword/:id', component: ResetpasswordComponent },
    { path: 'payment/:id/:id1/:id2/:id3',  canActivate: [AuthGuard], component: PaymentComponent },

    {
        path: 'auth', component: AuthComponent,
        children: [
            {
                path: 'signup',
                component: SignupComponent
            },
            {
                path: 'signin',
                component: SigninComponent
            }
        ]
    },

    { path: 'contact', component: ContactComponent },
    { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}


