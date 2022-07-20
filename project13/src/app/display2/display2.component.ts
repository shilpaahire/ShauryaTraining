import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-display2',
  templateUrl: './display2.component.html',
  styleUrls: ['./display2.component.css']
})
export class Display2Component implements OnInit {
  frmUser: any;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.frmUser = this.formBuilder.group(
      {
        username: '',
        roles: this.formBuilder.array([])
      }
    )
  }
  get roles(): FormArray {
    return this.frmUser.get("roles") as FormArray
  }

  newrole(): FormGroup {
    return this.formBuilder.group(
      {
        role: ''
      }
    )
  }
  addroles()
  {
    this.roles.push(this.newrole());
  }
  removerole(i:number)
  {
    this.roles.removeAt(i);
  }
  onSubmit()
  {
    console.log(this.frmUser.value);
  }
}
