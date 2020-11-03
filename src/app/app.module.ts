import { AuthInterceptorService } from './auth-interceptor.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { ModalModule } from 'ngx-bootstrap/modal';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LocationStrategy, HashLocationStrategy, PathLocationStrategy } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreloaderComponent } from './components/layout/preloader/preloader.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ChattingComponent } from './components/common/chatting/chatting.component';
import { PartnerComponent } from './components/common/partner/partner.component';
import { PricingPlanComponent } from './components/common/pricing-plan/pricing-plan.component';
import { ClientsComponent } from './components/common/clients/clients.component';
import { FreeTrialComponent } from './components/common/free-trial/free-trial.component';
import { HomeTwoComponent } from './components/pages/home-two/home-two.component';
import { HomeThreeComponent } from './components/pages/home-three/home-three.component';
import { AboutComponent } from './components/pages/about/about.component';
import { PricingComponent } from './components/pages/pricing/pricing.component';
import { TeamComponent } from './components/pages/team/team.component';
import { FeaturesComponent } from './components/pages/features/features/features.component';
import { FeaturesOneComponent } from './components/pages/features/features-one/features-one.component';
import { FeaturesTwoComponent } from './components/pages/features/features-two/features-two.component';
import { AuthComponent } from './components/pages/auth/auth/auth.component';
import { SigninComponent } from './components/pages/auth/signin/signin.component';
import { SignupComponent } from './components/pages/auth/signup/signup.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { BlogComponent } from './components/pages/blog/blog/blog.component';
import { BlogGridComponent } from './components/pages/blog/blog-grid/blog-grid.component';
import { BlogSidebarComponent } from './components/pages/blog/blog-sidebar/blog-sidebar.component';
import { BlogDetailsComponent } from './components/pages/blog/blog-details/blog-details.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { HeaderTwoComponent } from './components/layout/header-two/header-two.component';
import { SidenavComponent } from './user/sidenav/sidenav.component';
import { UpdateProfileComponent } from './dialog/update-profile/update-profile.component';
import { ForgotPasswordComponent } from './dialog/forgot-password/forgot-password.component';
import { SupportComponent } from './user/support/support.component';
import { AuthGuard } from '../app/app-routing.module';
import { PaymentComponent } from './user/payment/payment.component';
import { SuccessComponent } from './user/success/success.component';
import { ResetpasswordComponent } from './user/resetpassword/resetpassword.component';
import { ProfileComponent } from './user/profile/profile.component';
import { HistoryComponent } from './user/history/history.component';
import { ProfileSidebarComponent } from './user/profile-sidebar/profile-sidebar.component';
import { MyChatbotsComponent } from './user/my-chatbots/my-chatbots.component';
import { RazorpayComponent } from './user/razorpay/razorpay.component';
import { DashboardComponent } from './user/dashboard/dashboard.component';
import { ProfileResponsiveBarComponent } from './user/profile-responsive-bar/profile-responsive-bar.component';
import { CareerComponent } from './user/career/career.component';
import { JobCardComponent } from './user/career/job-card/job-card.component';
import {CustomChatbot} from './user/Custom-Chatbot/custom-chatbot.component'
import {MatStepperModule} from '@angular/material/stepper'
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
// import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {CustomerChatbotService} from './user/Custom-Chatbot/custom-chatbot.service'

@NgModule({
  declarations: [
    AppComponent,
    PreloaderComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ChattingComponent,
    PartnerComponent,
    PricingPlanComponent,
    ClientsComponent,
    FreeTrialComponent,
    HomeTwoComponent,
    HomeThreeComponent,
    AboutComponent,
    PricingComponent,
    TeamComponent,
    FeaturesComponent,
    FeaturesOneComponent,
    FeaturesTwoComponent,
    AuthComponent,
    SigninComponent,
    SignupComponent,
    FaqComponent,
    ErrorComponent,
    BlogComponent,
    BlogGridComponent,
    BlogSidebarComponent,
    BlogDetailsComponent,
    ContactComponent,
    HeaderTwoComponent,
    SidenavComponent,
    UpdateProfileComponent,
    ForgotPasswordComponent,
    SupportComponent,
    PaymentComponent,
    SuccessComponent,
    ResetpasswordComponent,
    ProfileComponent,
    HistoryComponent,
    ProfileSidebarComponent,
    MyChatbotsComponent,
    RazorpayComponent,
    DashboardComponent,
    ProfileResponsiveBarComponent,
    CareerComponent,
    JobCardComponent,
    CustomChatbot
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    // MatSlideToggleModule,
    ModalModule.forRoot(),
  ],
  providers: [
  BsModalRef,
  BsModalService,
  AuthGuard,
  CustomerChatbotService,
  {provide: HTTP_INTERCEPTORS,
     useClass: AuthInterceptorService,
      multi: true}
  ],
  entryComponents: [
    UpdateProfileComponent,
    ForgotPasswordComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
