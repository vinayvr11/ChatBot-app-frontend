import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserModel {

  userLoginModel = {
    email: '',
    password: ''
};


addNewUser = {
  username: '',
    name: '',
    last: '',
    email: '',
    phone: '',
    password: '',
    verify: '',
    company_name: '',
    address: '',
    company_url: ''
};

 userProfile = {
   name: '',
   last: '',
   phone: '',
   company_id: '',
   company_name: '',
   address: '',
   company_url: ''
};


useremail = {
email: '',
company_id: ''
};

projectid = {
  project_id: ''
};

sessionid = {
  session_id: ''
};

chatbody = {
  ans: '',
  intents: '',
  ques: ''
};

mychatformone = {
  name: '',
  category: '',
  platform: '',
  number: '',
  company_id: ''
};


mychatformtwo = {
  name: '',
  category: '',
  platform: '',
  company_id: '',
  project_id: ''
};

supportModel = {
  requestType: '',
  urgency: '',
  subject: '',
  agentName: '',
  message: '',
  email: '',
  company_id: ''
};

contactModel = {
  name: '',
  message: '',
  email: '',
  phone: '',
  subject: '',
  company_id: ''
};

priceid = {
  planid : ''
};
botquantity = {
  quantity : ''
};

paycverify = {
  subscription_id : '',
  payment_id : '',
  signature: ''
};

reset = {
  password : '',
  verify : '',
  company_id: '',
  token: ''
};

freeTrial = {
  name: '',
  message: '',
  email: '',
  phone: '',
  subject: '',
  company_id: ''
};
}
