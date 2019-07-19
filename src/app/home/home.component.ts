import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title1 ="Online Course Portal";
  title2 = "MindScripts Technology";
  d = new Date;
  constructor() { }

  ngOnInit() {
  }

}
