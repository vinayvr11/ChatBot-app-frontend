import { UserModel } from './../../models/user-model/user-model.model';
import { NgForm } from '@angular/forms';
import { UserManagementService } from './../../services/user-management/user-management.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-chatbots',
  templateUrl: './my-chatbots.component.html',
  styleUrls: ['./my-chatbots.component.scss']
})
export class MyChatbotsComponent implements OnInit {

  userData: any;
  botData: any;
  projectId: string;
  iFrameCode: string;

  constructor(
    private userManagementService: UserManagementService,
    private userModel: UserModel
  ) { }

  ngOnInit(): void {
    this.userData = JSON.parse(localStorage.getItem('userdata'));
    this.userManagementService.myChatBotData(this.userData.company_id)
    .subscribe( (botData: any) => {
       this.botData = [...botData.botsData.allBots];
       console.log('MyChatBot', this.botData);
    });
  }

  setIframeCode(projectid) {
    this.iFrameCode = 'http://localhost:3000/getUserBot?Cid=' + this.userData.company_id + '&Pid=' + projectid.value;
  }

  setProjectId(projectId) {
    this.projectId = projectId.value;
  }

  onIntegrate(form: NgForm) {

    this.userModel.botIntegrate.company_id = this.userData.company_id;
    this.userModel.botIntegrate.project_id = this.projectId;
    this.userModel.botIntegrate.name = form.value.name;
    this.userModel.botIntegrate.category = form.value.category;
    this.userModel.botIntegrate.platform  = form.value.platform;

    this.userManagementService.integrateBot(this.userModel.botIntegrate)
    .subscribe( (botInfo: any) => {
      if (botInfo.message) {
        console.log(botInfo.message, botInfo.bots);
        this.botData = [...botInfo.bots];
      } else {
        console.log('Error', botInfo.error);
      }
    });
  }

}
