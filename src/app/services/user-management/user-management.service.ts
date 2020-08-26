import { Injectable , OnInit} from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { UserModel } from '../../models/user-model/user-model.model';
import { catchError } from 'rxjs/operators';
import { Observable, ObservableInput } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UserManagementService {
  constructor(
    private userModel: UserModel,
    private http: HttpClient,
  ) {}

    header: any;



    public getUserData() {
      console.log(this.userModel.loginModel.email);
    }

    public signUp(signUpModel) {


      return this.http.post(environment.apiurl + '/email', this.userModel.signUpModel);

    }

    public signIn(signInModel) {
      return this.http.post(environment.apiurl + '/login', this.userModel.loginModel);
    }

    public getPlans(category) {
      return this.http.get(environment.apiurl + '/getPlan' + '/' + category);
    }

    public createPlan(paymentBody) {
      return this.http.post(environment.apiurl + '/createPayment', paymentBody);
    }

    public getPaymentStatus(paymentStatusBody) {
      return this.http.post(environment.apiurl + '/paymentStatus', paymentStatusBody);
    }

    public myChatBotData(companyId, header) {
      this.header = {
        observe: 'response'
      };
      return this.http.post(environment.apiurl + '/myChatBot', {company_id: companyId}, this.header);
    }

    public integrateBot(integrateModel) {
      return this.http.post(environment.apiurl + '/integrateBot', integrateModel);
    }

    public getChatHistory(user) {
      this.header = {
        observe: 'response'
      };
      return this.http.post(environment.apiurl + '/history/' + user.project_id, user, this.header);
    }

    public getDashboardData(user) {
      this.header = {
        observe: 'response'
      };
      return this.http.post(environment.apiurl + '/dashboard/' + user.project_id, user, this.header);
    }

    public sendMail(mailBody) {
      return this.http.post(environment.apiurl + '/support',  mailBody);
    }

    public updateProfile(updateBody) {
      this.header = {
        observe: 'response'
      };
      return this.http.post(environment.apiurl + '/updateProfile', updateBody, this.header);
    }

    public buyDemo(demoBody) {
      return this.http.post(environment.apiurl + '/buyDemo', demoBody);
    }
}
