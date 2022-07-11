import { Component, OnInit } from '@angular/core';
import { Data2Service } from '../data2.service';

@Component({
  selector: 'app-display3',
  templateUrl: './display3.component.html',
  styleUrls: ['./display3.component.css'],
  // providers: [Data2Service]
})
export class Display3Component implements OnInit {
  Result2:string="";
  constructor(private staticHeaderText : Data2Service) { }

  ngOnInit(): void {
    this.Result2 = this.staticHeaderText.TestData2Service("This is my Data2 service using static modifier");
    // console.log("This is my Data2 service using static modifier");
  }

}
