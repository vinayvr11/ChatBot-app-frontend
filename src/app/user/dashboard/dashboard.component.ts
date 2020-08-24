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
  xAxisLabel = 'Year';
  yAxisLabel = 'Population';
  timeline = true;


  // Bar chart
    // options
    showXAxis = true;
    showYAxis = true;
    gradient = false;
    showLegend = true;
    xAxisLabelBar = 'Country';
    yAxisLabelBar = 'Population';


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


  }

  ngOnInit(): void {

    this.userData = JSON.parse(localStorage.getItem('userdata'));
    this.token = localStorage.getItem('token');
    this.botsId = this.userData.project_id;
    this.getDashboardData(this.userData.project_id[0]);
  }


  onClickBotId(botId) {
    console.log(botId);
    this.getDashboardData(botId.innerText);
  }

  getDashboardData(botId) {
    this.userModel.historyModel.company_id = this.userData.company_id;
    this.userModel.historyModel.project_id = botId;
    this.userModel.historyModel.header = this.token;
    this.userManagementService.getDashboardData(this.userModel.historyModel)

    .subscribe( (dashboardData: any) => {
       console.log('Your sahboard data', dashboardData.userData);
       this.lineChartLabels = dashboardData.userData.lineChartLabels;
       this.msgChartData = dashboardData.userData.msgChartData;
       this.sessionChartData = dashboardData.userData.sessionChartData;

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

       this.intentsData = dashboardData.userData.intents;

       console.log(dashboardData.userData.intents);

     });
  }

}
