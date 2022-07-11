import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css']
})
export class Task1Component implements OnInit {
  TitleText:string="Records : ";
  ContactID:number=123;
  ContactName:string="Rajat Sharma";
  Company:string="ABC 123 PVT LTD";
  DueAmount:number=4555;
  Phone:any="+91-123455555";
  Area="South Zone";
  constructor() { }

  ngOnInit(): void {
  }

}
