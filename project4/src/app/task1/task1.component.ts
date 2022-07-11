import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css']
})
export class Task1Component implements OnInit {
  firstName: any;
  lastName: any;
  constructor() {}

  ngOnInit(): void {}

  onSubmit(fn: any, ln: any) {
    this.firstName = fn;
    this.lastName = ln;
    console.log(this.firstName.value);
  }

}
