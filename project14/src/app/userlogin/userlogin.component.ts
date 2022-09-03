import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LoginserviceService } from '../services/loginservice.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  userdata:any=[];
  frmUser:any;
  login:string="";

  constructor(private user : LoginserviceService, private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.frmUser = this.formBuilder.group({
      username:'',
      password:''
    })
  }

  onSubmit()
  {
    const serverUser = this.userdata.filter((user:any)=>{
      return user.username === this.frmUser.value.username;
    })

    if(serverUser[0].password === this.frmUser.value.password)
    {
      this.login = "Login successful...";
    }
    else
    {
      this.login = "Login Failed...";
    }
  }

}
