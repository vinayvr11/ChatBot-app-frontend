import { Component, OnInit } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pricing = 'pricing';
  constructor() { }

  ngOnInit() {
    $('.round-button').click(function() {
      console.log('clicked');
      $('.round-button').toggle(300);
      $('.chatbot-container').toggle(300);
    });

    $('.fa-times').click(function() {
      console.log('clicked');
      $('.chatbot-container').toggle(300);
      $('.round-button').toggle(300);
    });
  }
  scroll(id): void {
    console.log(id);
    const el: HTMLElement|null = document.getElementById(id);
    if (id) {
      console.log(id);
      // tslint:disable-next-line: prefer-const
      let elmnt = document.getElementById(id);
      elmnt.scrollIntoView({ behavior: 'auto' , block: 'start', inline: 'nearest'});
      // (id).scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
    }
  }

}
