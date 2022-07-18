import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display1',
  templateUrl: './display1.component.html',
  styleUrls: ['./display1.component.css']
})
export class Display1Component implements OnInit {
  TagLine:string="My Angular Application...";
  Fees:number=18000;
  TodaysDate = new Date;

  constructor() { }
  ngOnInit(): void {
  }

}
