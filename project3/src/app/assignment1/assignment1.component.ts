import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-assignment1',
  templateUrl: './assignment1.component.html',
  styleUrls: ['./assignment1.component.css']
})
export class Assignment1Component implements OnInit {
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
