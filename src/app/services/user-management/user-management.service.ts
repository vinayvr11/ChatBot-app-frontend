import { Injectable , OnInit} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { UserModel } from '../../models/user-model/user-model.model';

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

    public myChatBotData(companyId, header) {
      this.header = {
        headers: new HttpHeaders({
          authorization: header
        })
      };
      return this.http.post(environment.apiurl + '/myChatBot', {company_id: companyId}, this.header);
    }

    public integrateBot(integrateModel) {
      return this.http.post(environment.apiurl + '/integrateBot', integrateModel);
    }

    public getChatHistory(user) {
      this.header = {
        headers: new HttpHeaders({
          authorization: user.header
        })
      };
      return this.http.post(environment.apiurl + '/history/' + user.project_id, user, this.header);
    }

    public getDashboardData(user) {
      this.header = {
        headers: new HttpHeaders({
          authorization: user.header
        })
      };
      return this.http.post(environment.apiurl + '/dashboard/' + user.project_id, user, this.header);
    }

    public sendMail(mailBody) {
      return this.http.post(environment.apiurl + '/support',  mailBody);
    }

    public updateProfile(updateBody) {
      this.header = {
        headers: new HttpHeaders({
          authorization: updateBody.header
        })
      };
      return this.http.post(environment.apiurl + '/updateProfile', updateBody, this.header);
    }

}
