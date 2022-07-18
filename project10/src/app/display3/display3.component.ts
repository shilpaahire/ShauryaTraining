import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-display3',
  templateUrl: './display3.component.html',
  styleUrls: ['./display3.component.css']
})
export class Display3Component implements OnInit {
  formUser: any;
  constructor() { }

  ngOnInit(): void {
    this.formUser = new FormGroup(
      {
        ContactId: new FormControl(""),
        ContactName: new FormControl(""),
        Address: new FormControl(""),
        Pincode: new FormControl("")
      }
    )
  }
  onSubmit(userForm:any){
    console.log(userForm);
  }
}
