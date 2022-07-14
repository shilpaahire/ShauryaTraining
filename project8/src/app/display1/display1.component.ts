import { Component, OnInit } from '@angular/core';
import { Contacts } from '../service';

@Component({
  selector: 'app-display1',
  templateUrl: './display1.component.html',
  styleUrls: ['./display1.component.css']
})
export class Display1Component implements OnInit {
  Msg:any;
  Result1:string="";
  Result2:string="";
  Result3:string="";
  Result4:string="";
  constructor() { }

  ngOnInit(): void {
    const ser = new Contacts.ServiceService();
    this.Msg = ser.serv();

    const data1 = new Contacts.AddNewContact();
    this.Result1 = data1.display1();

    const data2 = new Contacts.EditContact();
    this.Result2 = data2.display2();

    const data3 = new Contacts.DeleteContact();
    this.Result3 = data3.display3();

    const data4 = new Contacts.ListContact();
    this.Result4 = data4.display4();
  }

}
