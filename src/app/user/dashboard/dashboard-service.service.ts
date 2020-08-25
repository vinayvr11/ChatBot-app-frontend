import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardServiceService {

  private lineChartSessionsData =  [
    {
      name: 'Number Of Users',
      series: []
    }
  ];

  private msgChartSessionData =  [
    {
      name: 'Number Of Messages',
      series: []
    }
  ];

  sessionObj: any;
  msgObj: any;

  constructor() { }

  getSessionData(lineChart: any[], msgChart: any[], sessionChart: any[]) {
    this.msgChartSessionData[0].series = [];
    this.lineChartSessionsData[0].series = [];

    for (let i = 0; i < lineChart.length; i++) {
      this.sessionObj = {name: '', value: ''};
      this.msgObj = {name: '', value: ''};

      this.sessionObj.name = lineChart[i];
      this.sessionObj.value = sessionChart[i];

      this.msgObj.name = lineChart[i];
      this.msgObj.value = msgChart[i];

      this.msgChartSessionData[0].series.push(this.msgObj);
      this.lineChartSessionsData[0].series.push(this.sessionObj);
    }

    console.log('Series', this.msgChartSessionData[0].series);
    console.log('Sessions', this.lineChartSessionsData[0].series);

    return{
      sessionChartData: this.lineChartSessionsData,
      msgChartData: this.msgChartSessionData
    };
  }


}
