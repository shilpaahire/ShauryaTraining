import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  UserData:any=[];
  selectedUserId:number=0;
    constructor() { }
  
    ngOnInit(): void {
      this.UserData = [
        {userid:1,displayName:"Rajesh", userStatus:"Active", roleAssign:"Admin"},
        {userid:2,displayName:"Swati", userStatus:"Disabled", roleAssign:"User"},
        {userid:3,displayName:"Vansh", userStatus:"Active", roleAssign:"User"},
        {userid:4,displayName:"Megha", userStatus:"Active", roleAssign:"Manager"},
        {userid:5,displayName:"Priya", userStatus:"Active", roleAssign:"User"}
      ]
    }
  
    onDetails(selectedId:number){
      this.selectedUserId = selectedId;
    }
}
