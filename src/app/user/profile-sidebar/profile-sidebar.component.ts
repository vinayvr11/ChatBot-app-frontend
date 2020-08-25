import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-profile-sidebar',
  templateUrl: './profile-sidebar.component.html',
  styleUrls: ['./profile-sidebar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProfileSidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onLogout() {
    localStorage.clear();
  }

}
