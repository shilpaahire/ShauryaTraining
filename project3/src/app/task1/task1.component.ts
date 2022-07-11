import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css']
})
export class Task1Component implements OnInit {

  TitleText:string="Angular Componant";
  DisplayName:string=""

  onSubmit()
  {
    this.DisplayName=this.AddContact();
    //console.log(Name);
  }

  AddContact():string
  {
    return "Rohit Kumar";
  }

  constructor() { }
  ngOnInit(): void {
  }
}
