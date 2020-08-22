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

  constructor(
    private userModel: UserModel,
    private userManagementService: UserManagementService
  ) { }

  ngOnInit(): void {

    this.userData = JSON.parse(localStorage.getItem('userdata'));
    console.log('Data', this.userData.company_id);
    this.userModel.historyModel.company_id = this.userData.company_id;
    this.userModel.historyModel.project_id = this.userData.project_id[0];
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
