import { UserModel } from "./../../models/user-model/user-model.model";
import { NgForm } from "@angular/forms";
import { UserManagementService } from "./../../services/user-management/user-management.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-my-chatbots",
  templateUrl: "./my-chatbots.component.html",
  styleUrls: ["./my-chatbots.component.scss"],
})
export class MyChatbotsComponent implements OnInit {
  userData: any;
  botData: any;
  projectId: string;
  iFrameCode: string;
  chatBotSrcFile: string;
  token: string;

  constructor(
    private userManagementService: UserManagementService,
    private userModel: UserModel
  ) { }

  ngOnInit(): void {
    this.userData = JSON.parse(localStorage.getItem("userdata"));
    this.token = localStorage.getItem("token");
    console.log(this.userData);
    if (this.userData.isBuy || this.userData.isDemo) {
      this.userManagementService
        .myChatBotData(this.userData.company_id, this.token)
        .subscribe(
          (botData: any) => {
            if (this.userData.isBuy) {
              this.botData = [...botData.body.botsData.allBots];
            } else if (this.userData.isDemo) {
              console.log(botData.body);
              this.botData = [botData.body.demoBot.botChats[0]];
            }
            console.log("MyChatBot", botData);
          },
          (err) => {
            const str = "AUTH ERROR:" + err.error.error;
            alert(str);
          }
        );
    }
  }

  setIframeCode(projectid) {
    this.iFrameCode =
      'https://dry-river-91831.herokuapp.com/getUserBot?Cid=' +
      this.userData.company_id +
      '&Pid=' +
      projectid.value;

    this.chatBotSrcFile = 'https://dry-river-91831.herokuapp.com/assets/javascript/chatbotFile.js';
  }

  setProjectId(projectId) {
    this.projectId = projectId.value;
  }

  onIntegrate(form: NgForm) {
    this.userModel.botIntegrate.company_id = this.userData.company_id;
    this.userModel.botIntegrate.project_id = this.projectId;
    this.userModel.botIntegrate.name = form.value.name;
    this.userModel.botIntegrate.category = form.value.category;
    this.userModel.botIntegrate.platform = form.value.platform;

    this.userManagementService
      .integrateBot(this.userModel.botIntegrate)
      .subscribe((botInfo: any) => {
        console.log(botInfo);

        if (botInfo.message) {
          if (botInfo.demo) {
            this.botData = [...botInfo.bots.botChats];
            console.log(this.botData);
          } else if (botInfo.buy) {
            console.log(botInfo.message, botInfo.bots);
            this.botData = [...botInfo.bots];
          }
        } else {
          console.log("Error", botInfo.error);
        }
      });
  }
}
