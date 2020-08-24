import { UserManagementService } from './../../services/user-management/user-management.service';
import { UserModel } from './../../models/user-model/user-model.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  userData: any;
  sessionChats: any;
  chats: any;
  token: any;
  botsId: any[];


  constructor(
    private userModel: UserModel,
    private userManagementService: UserManagementService
  ) { }

  ngOnInit(): void {

    this.userData = JSON.parse(localStorage.getItem('userdata'));
    this.botsId = this.userData.project_id;
    console.log('Data', this.userData.company_id);
    this.getHistoryData(this.userData.project_id[0]);
  }


  onClickBotId(botId) {
    console.log(botId);
    this.getHistoryData(botId.innerText);
  }

  getHistoryData(botId) {
    this.userModel.historyModel.company_id = this.userData.company_id;
    this.userModel.historyModel.project_id = botId;
    this.userModel.historyModel.header = localStorage.getItem('token');
    this.userManagementService.getChatHistory(this.userModel.historyModel)

    .subscribe( (chat: any) => {
      this.sessionChats = [...chat.userData.data];
      console.log('Your history chats', this.sessionChats);

    });

  }


  showChats(session) {
    this.sessionChats.forEach(element => {
      if (session.innerText === element.session_id) {
        this.chats = element.chats;
        console.log('understand chats', this.chats);

      }
    });
  }


}
