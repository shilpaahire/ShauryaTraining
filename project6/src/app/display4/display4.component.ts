import { Component, OnInit } from '@angular/core';
import { Data3Service } from '../data3.service';

@Component({
  selector: 'app-display4',
  templateUrl: './display4.component.html',
  styleUrls: ['./display4.component.css']
})
export class Display4Component implements OnInit {
  Result3:string="";
  constructor(private data : Data3Service) { }

  ngOnInit(): void {
    // const Result=this.data.MessageNotify("Displayed Successfully");
    // console.log("Result : ",Result);
  }

  onClickHandler()
  {
    this.Result3 = this.data.MessageNotify("Service3 executed by Display4");
  }
}
