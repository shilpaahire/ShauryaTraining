import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css']
})
export class Task2Component implements OnInit 
{
  ShowMe : boolean = true;
  //HideText : boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  onToggle()
  {
    this.ShowMe = !this.ShowMe;

  }
  //title="Angular App";
}
