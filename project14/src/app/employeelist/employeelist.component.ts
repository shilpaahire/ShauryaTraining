import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {
empData:any=[];
frmEmp:any;
  constructor(private employee : EmployeeService, private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.LoadEmp()
    this.frmEmp = this.formBuilder.group({
      id:'',
      empname:'',
      designation:'',
      status:''
    })
      }

      LoadEmp()
      {
        this.employee.GetAllEmployee().subscribe(data=>
          {
            console.log(data);
            this.empData = data;
          }) 
      }

      onSubmit()
      {
        console.log("form ", this.frmEmp.value);
        const empValue = this.frmEmp.value;
        this.employee.AddNewEmp(empValue).subscribe((res:any)=>{
          console.log(res);
          this.LoadEmp();
        })
      }


}
