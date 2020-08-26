import { catchError } from 'rxjs/operators';
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


  // Default configurations of responsive chat-app
  messageBoxShow: string;
  userBoxShow: string;

  constructor(
    private userModel: UserModel,
    private userManagementService: UserManagementService
  ) { }

  ngOnInit(): void {
    this.messageBoxShow = 'none';
    this.userBoxShow = 'block';
    this.userData = JSON.parse(localStorage.getItem('userdata'));
    if (this.userData.isBuy) {
      this.botsId = this.userData.project_id;
     } else if (this.userData.isDemo) {
      this.botsId = [this.userData.demoPId];
     }
    console.log('Data', this.userData.company_id);
    this.getHistoryData(this.userData.project_id[0]);
  }


  onClickBotId(botId) {
    console.log(botId);
    this.getHistoryData(botId.innerText);
  }

  getHistoryData(botId) {
    this.chats = [];
    this.userModel.historyModel.company_id = this.userData.company_id;
    this.userModel.historyModel.project_id = botId;
    this.userModel.historyModel.header = localStorage.getItem('token');
    this.userManagementService.getChatHistory(this.userModel.historyModel)

    .subscribe( (chat: any) => {
      console.log('Your chat data', chat);
      this.sessionChats = [...chat.body.userData.data];
      console.log('Your history chats', this.sessionChats);

    }, err => {
      const str = 'ERROR:' + err.error.error;
      alert(str);
    });
  }


  showChats(session) {
    this.userBoxShow = 'none';

    this.messageBoxShow = 'block';
    this.sessionChats.forEach(element => {
      if (session.innerText === element.session_id) {
        this.chats = element.chats;
        console.log('understand chats', this.chats);

      }
    });
  }


  changeChatState() {
    this.messageBoxShow = 'none';
    this.userBoxShow = 'block';
  }

}
