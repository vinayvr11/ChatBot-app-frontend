import { DashboardServiceService } from './dashboard-service.service';
import { multi } from './multi';
import { single } from './bar';
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { UserModel } from '../../models/user-model/user-model.model';
import { UserManagementService } from '../../services/user-management/user-management.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {




  userData: any;
  single: any[];
  multi: any[];
  token: any;
  botsId: any[];

  view: any[] = [700, 300];

  // Graphs Data
  lineChartLabels: any[];
  sessionChartData: any[];
  msgChartData: any[];

  messagesData: any[];
  sessionsData: any[];
  intentsData: any[];

  // options
  legend = true;
  showLabels = true;
  animations = true;
  xAxis = true;
  yAxis = true;
  showYAxisLabel = true;
  showXAxisLabel = true;
  xAxisLabel = 'Date';
  yAxisLabel = 'Number Of Messages';
  timeline = true;


  // Bar chart
    // options
    showXAxis = true;
    showYAxis = true;
    gradient = false;
    showLegend = true;
    xAxisLabelBar = 'Top 5 Intents';
    yAxisLabelBar = 'Number of Intents';


  colorSchemeBar = {
      domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };


  constructor(
    private userModel: UserModel,
    private userManagementService: UserManagementService,
    private dashboardService: DashboardServiceService
  ) {
   // Object.assign(this, { multi });
   this.multi = multi;
   Object.assign(this, { single });
   this.userData = JSON.parse(localStorage.getItem('userdata'));
   this.token = localStorage.getItem('token');
   if (this.userData.isBuy) {
    this.botsId = this.userData.project_id;
   } else if (this.userData.isDemo) {
    this.botsId = [this.userData.demoPId];
   }
   // this.getDashboardData(this.userData.project_id[0]);
  }

  ngOnInit(): void {

  }


  onClickBotId(botId) {
    console.log(botId);
    this.getDashboardData(botId.innerText);
  }

  getDashboardData(botId) {
    this.messagesData = [];
    this.sessionsData = [];

    console.log('Dashboard data of the user ', botId);
    this.userModel.dashboarModel.company_id = this.userData.company_id;
    this.userModel.dashboarModel.project_id = botId;
    this.userModel.dashboarModel.header = this.token;
    this.userManagementService.getDashboardData(this.userModel.dashboarModel)

    .subscribe( (dashboardData: any) => {
       console.log('Your sahboard data', dashboardData);
       this.lineChartLabels = dashboardData.body.userData.lineChartLabels;
       this.msgChartData = dashboardData.body.userData.msgChartData;
       this.sessionChartData = dashboardData.body.userData.sessionChartData;

       console.log(this.lineChartLabels);
       console.log(this.msgChartData);

       this.messagesData = this.dashboardService.getSessionData(this.lineChartLabels,
        this.msgChartData,
        this.sessionChartData)
        .msgChartData;

       this.sessionsData = this.dashboardService.getSessionData(this.lineChartLabels,
          this.msgChartData,
          this.sessionChartData)
          .sessionChartData;

       this.intentsData = dashboardData.body.userData.intents;

       console.log(dashboardData.body.userData.intents);
       console.log(this.sessionsData);

     }, err => {
       const str = 'ERROR:' + err.error.error;
       alert(str);
     });
  }

}
