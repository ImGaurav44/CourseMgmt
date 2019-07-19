import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {

  @Input() rating:number;
  starWidth:number;

  @Output() ratingClick = new EventEmitter();                                                                                                                                                                                                                                                                                                                          
  constructor() { }

  ngOnInit() {
    this.starWidth = this.rating * 75/5;
  }

  onClick()
  {
    return this.ratingClick.emit(`Rating ${ this.rating } is clicked`);
  }

}
