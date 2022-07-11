import { Component, OnInit } from '@angular/core';
import {Data1Service} from '../data1.service';

@Component({
  selector: 'app-display2',
  templateUrl: './display2.component.html',
  styleUrls: ['./display2.component.css'],
  // providers:[Data1Service]
})
export class Display2Component implements OnInit {
  Result1:string="";
  constructor(private headerText : Data1Service) { }

  ngOnInit(): void {
    this.Result1 = this.headerText.TestData1Service("This is my Data1 service using public modifier");
    // console.log("This is my Data1 service using public modifier");
  }

}
