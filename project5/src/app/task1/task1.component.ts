import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css']
})
export class Task1Component implements OnInit {
  nameColor:String="";
  selectedColor:string="";
  constructor() { }

  ngOnInit(): void {
  }
  // onBlue()
  // {
  //   this.nameColor="Blue";
  // }
  // onGreen()
  // {
  //   this.nameColor="Green";
  // }
  // onRed()
  // {
  //   this.nameColor="Red";
  // }

  onChangeColor(nameColor:string)
  {
    this.selectedColor=nameColor;
  }
}
