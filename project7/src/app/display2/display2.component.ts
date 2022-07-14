import { Component, OnInit } from '@angular/core';
import { MsgServiceService } from '../msg-service.service';

@Component({
  selector: 'app-display2',
  templateUrl: './display2.component.html',
  styleUrls: ['./display2.component.css']
})
export class Display2Component implements OnInit {
  constructor(private Msg:MsgServiceService) { }
  Result:string="";

  ngOnInit(): void 
  {
    this.Result = this.Msg.DisplayMessage();
  }

}
