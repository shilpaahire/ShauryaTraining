import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task3',
  templateUrl: './task3.component.html',
  styleUrls: ['./task3.component.css']
})
export class Task3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  name: string = 'Ankita Saha';
  designation: string = 'Angular Developer';
  leavebalance: any = 10;

}
