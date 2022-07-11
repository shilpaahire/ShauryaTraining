import { Component, OnInit } from '@angular/core';

interface Contact {
  contactname:string,
  contactaddress:string,
  contactphone:number,
  areacode:string,
  society:string
}

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css']
})
export class Task2Component implements OnInit {
  
  Output:any; 
  
  // onSubmit()
  // {
  //   this.Output=this.Display;
  // }

  Display()
  {
    let arrContact:Contact = {contactname:'Nidhi Singh',contactaddress:'H.No.12345',contactphone:10987654321,areacode:'South Zone',society:'New Galaxy Apartment'};
    this.Output=arrContact;
  }
  constructor() { }
  ngOnInit(): void {
  }
}
