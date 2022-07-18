import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display3',
  templateUrl: './display3.component.html',
  styleUrls: ['./display3.component.css']
})
export class Display3Component implements OnInit {
  arrUser:any=[
    {userid:1, username:'Radha', userstatus:'A'},
    {userid:2, username:'Megha', userstatus:'D'},
    {userid:3, username:'Raj', userstatus:'A'},
    {userid:4, username:'Sameer', userstatus:'A'},
    {userid:5, username:'Prafull', userstatus:'D'},
    {userid:6, username:'Adhira', userstatus:'A'},
    {userid:7, username:'Dipak', userstatus:'D'},
    {userid:8, username:'Kajal', userstatus:'A'},
    {userid:9, username:'Diksha', userstatus:'O'},
    {userid:10, username:'Pooja', userstatus:'D'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
