import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  name: any = 'Rahul Sharma';
  designation: any = 'Full Stack Developer';
  leavebalance: any = 10;

}
