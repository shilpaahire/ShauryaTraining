import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task4',
  templateUrl: './task4.component.html',
  styleUrls: ['./task4.component.css']
})
export class Task4Component implements OnInit {

  ColorType:Color=Color.None;
  constructor() { }

  ngOnInit(): void {
  }

  onColor(ColorNo:any)
  {
    if(ColorNo === 1) {
      this.ColorType = Color.Red;
    } else if(ColorNo === 2 ) {
      this.ColorType = Color.Green;
    } else if(ColorNo === 3) {
      this.ColorType = Color.Blue;
    }else if(ColorNo === 4) {
      this.ColorType = Color.Black;
    } else
    {
      this.ColorType = Color.None
    }
  }
}

enum Color {
  None = "None",
  Red = "Red",
  Green = "Green",
  Blue = "Blue",
  Black = "Black"
}


