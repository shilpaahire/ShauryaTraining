import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../service1.service';

@Component({
  selector: 'app-display1',
  templateUrl: './display1.component.html',
  styleUrls: ['./display1.component.css']
})

export class Display1Component implements OnInit {
Result:string="";

  constructor(private data : Service1Service) { }
  
  ngOnInit(): void {

    this.Result = this.data.Display2();
  }

}
