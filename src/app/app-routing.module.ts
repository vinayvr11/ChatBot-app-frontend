import { CareerComponent } from './user/career/career.component';
import { AuthGuardService} from './user/auth-guard.service';
import { DashboardComponent } from './user/dashboard/dashboard.component';
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
import { ProfileComponent } from '../app/user/profile/profile.component';
import { BlogComponent } from './components/pages/blog/blog/blog.component';
import { BlogGridComponent } from './components/pages/blog/blog-grid/blog-grid.component';
import { BlogSidebarComponent } from './components/pages/blog/blog-sidebar/blog-sidebar.component';
import { BlogDetailsComponent } from './components/pages/blog/blog-details/blog-details.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { HistoryComponent } from '../app/user/history/history.component';
import { MyChatbotsComponent } from '../app/user/my-chatbots/my-chatbots.component';
import { SupportComponent } from './user/support/support.component';
import { UserManagementService } from '../app/services/user-management/user-management.service';
import { PaymentComponent } from './user/payment/payment.component';
import { SuccessComponent } from './user/success/success.component';
import { ResetpasswordComponent } from './user/resetpassword/resetpassword.component';
import { CustomChatbot } from './user/Custom-Chatbot/custom-chatbot.component';


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
    
    //custom chatbot route
    {path : 'configure-chatbot', component : CustomChatbot},
    { path: 'support',  component: SupportComponent },
    { path: 'success',  component: SuccessComponent },

    {path: 'payment', component: PaymentComponent, children: [
        {path: ':id/:amount/:quantity/:category', component: PaymentComponent},
        {path: ':amount/:quantity/:category', redirectTo: '/pricing'},
        {path: ':quantity/:category', redirectTo: '/pricing'},
        {path: ':category', redirectTo: '/pricing'},
    ]},

    {path: 'pricing', component: PricingComponent},

    { path: 'resetpassword/:id', component: ResetpasswordComponent },

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

    {path: 'profile', component: ProfileComponent},
    {path: 'history', component: HistoryComponent, canActivate: [AuthGuardService]},
    {path: 'user-cahtbots', component: MyChatbotsComponent, canActivate: [AuthGuardService]},
    { path: 'contact', component: ContactComponent, canActivate: [AuthGuardService]},
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardService]},
    {path: 'about', component: AboutComponent},
    {path: 'career', component: CareerComponent},
    {path: 'success', component: SuccessComponent},
    { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}


