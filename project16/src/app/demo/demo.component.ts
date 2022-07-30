import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormControlName } from '@angular/forms';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  EmpForm = new FormGroup({
    empid : new FormControl(''),
    empname:new FormControl(''),
    empsalary:new FormControl('')
  })
  constructor() { }

  ngOnInit(): void {
  }

  Submit()
  {
    console.log(this.EmpForm.value);
  }

}
