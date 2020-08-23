import { Component, OnInit } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { multi } from './data';
import { single } from './single';
import { pie } from './pie';
import { UserModel } from '../../models/user-model/user-model.model';
import { UserManagementService } from '../../services/user-management/user-management.service'; 

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  multi: any[];
  view: any[] = [1080, 700];
  single: any[];
  pie: any[];
  userData: any;
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

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  constructor(
    private userModel: UserModel,
    private userManagementService: UserManagementService
  ) {
    Object.assign(this, { multi });
    Object.assign(this, { single });
    Object.assign(this, { pie });
  }

  ngOnInit(): void {
    this.userData = JSON.parse(localStorage.getItem('userdata'));
    this.userModel.historyModel.company_id = this.userData.company_id;
    this.userModel.historyModel.project_id = this.userData.project_id[0];

    this.userManagementService.getDashboardData(this.userModel.historyModel)
    .subscribe( (dashboardData: any) => {
      console.log("Your dashboard data", dashboardData);
    });
  }
  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  // Bar chart data here

  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  xAxisLabelBar = 'Country';
  yAxisLabelBar = 'Population';

  colorSchemeBar = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  onSelectBar(event) {
    console.log(event);
  }

  // Pie chart
  gradientPie: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: string = 'below';
  colorSchemePie = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  onSelectPie(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivatePie(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivatePie(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
