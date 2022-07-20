import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display1',
  templateUrl: './display1.component.html',
  styleUrls: ['./display1.component.css']
})
export class Display1Component implements OnInit {
EmpData:any=[];
NewEmpData:any=[];
Emp2:any;

selectedEmpId:number=0;
  constructor() { }

  ngOnInit(): void {
    this.EmpData=[
      {empid:101, empname:'Ram', designation:'Manager', salary:75000},
      {empid:102, empname:'Sham', designation:'Asst. Manager', salary:50000},
      {empid:103, empname:'Amol', designation:'Developer', salary:40000},
      {empid:104, empname:'Rekha', designation:'Tester', salary:45000},
      {empid:105, empname:'Manju', designation:'Designer', salary:42000}
    ]
  }
  onShift(Employee : any)
  {
    this.NewEmpData.push(Employee);
  }

  // onShift(InputID:number)
  // {
  //   this.selectedEmpId = InputID;
  //   if(this.selectedEmpId === this.empid)
  // }


}
