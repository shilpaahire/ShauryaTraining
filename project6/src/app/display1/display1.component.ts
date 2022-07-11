import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display1',
  template:'<h1>This is Display1</h1>',
  styles:['h1{color:red}']
  //  templateUrl: './display1.component.html',
  // styleUrls: ['./display1.component.css']
})
export class Display1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
