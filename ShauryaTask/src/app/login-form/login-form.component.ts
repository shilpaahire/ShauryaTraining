import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  userForm: any;
  UserData: any;
  GenderArr: any = ["male", "Female"];
  allCourse: any = [];
  dotnet: boolean = false;
  angular: boolean = false;
  editMode: boolean = false;
  // courseArr:any=["Angular","Dot Net"]
  constructor(private fb: FormBuilder, private user: ServiceService) { }

  ngOnInit(): void {
    this.LoadUser();
    this.userForm = this.fb.group({
      id: '',
      name: '',
      mobileno: '',
      gender: '',
      education: '',
      course: []
    })
  }

  LoadUser() {
    this.user.GetAllUser().subscribe(data => {
      this.UserData = data;
      // console.log(this.UserData);
    })
  }

  onSubmit(frm: any) {
    const fuser = this.userForm.value;
    console.log(fuser);
    if (this.editMode) {
      this.user.updateUser(fuser).subscribe((res: any) => {
        this.editMode = false;
        this.LoadUser();
        this.userForm.reset();
        this.dotnet = false;
        this.angular = false;
        this.allCourse = [];
      })
    } else {
      this.user.AddNewUser(fuser).subscribe((res: any) => {
        this.LoadUser();
        this.userForm.reset();
        this.dotnet = false;
        this.angular = false;
        this.allCourse = [];
      })
    }
  }

  onCheck(event: any) {
    event.preventDefault();
    const { name, checked } = event.target;
    if (checked && name === 'dotnet') {
      this.allCourse.push('Dot Net');
      this.dotnet = true;
    } else if (checked && name === 'angular') {
      this.allCourse.push('Angular');
      this.angular = true;
    } else {
      this.allCourse = [];
    }
    this.userForm.controls['course'].setValue(this.allCourse);
  }

  onDelete(id: number) {
    // console.log("hi");
    console.log(id);

    this.user.deleteUser(id).subscribe((res: any) => {
      console.log("deleted", res)
      this.LoadUser();
    })
  }

  // reset()
  // {
  //   this.userForm.reset();
  // }

  onUpdate(user: any) {
    this.editMode = true;
    this.userForm = this.fb.group({
      id: user.id,
      name: user.name,
      mobileno: user.mobileno,
      gender: user.gender,
      education: user.education,
      course: user.course
    })
  }
}
