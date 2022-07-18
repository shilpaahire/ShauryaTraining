import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  @Input('propuserName') userName:any;
  constructor() {
    console.log("UserDetails constructor");
  }

  ngOnChanges(changes:SimpleChanges){
    console.log("UserDetails ngOnChanges", changes);
    const {userName} = changes;
  }

  ngOnInit(): void {
  }
  
  ngOnDestory()
  {
    console.log("UserDetails ngOnDestoy");
  }

}
