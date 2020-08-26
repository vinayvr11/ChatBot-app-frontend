import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.scss']
})
export class JobCardComponent implements OnInit {

  jobs = ['Full Stack Developer', 'Machine Learning Engineer', 'Hr Executive'];

  constructor() { }

  ngOnInit(): void {
  }

}
