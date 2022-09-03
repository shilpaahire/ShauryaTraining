import { Component, OnInit } from '@angular/core';
import { EmpserviceService } from '../empservice.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
empData:any=[];
textSearch="";
name:string="";
msg:string="";
  constructor(private employee1 : EmpserviceService) { 
    this.employee1.GetAllEmployee().subscribe((empinfo)=>{
      this.empData = empinfo;
    })
  }

  onDelete()
  {
    let deleteName = this.empData.filter((v:any)=>
    {
      return v.empname.match(name);
    });

    deleteName.forEach((element:any)=>{
      this.employee1.RemoveNames(element.empid).subscribe((res:any)=>{
        this.msg = "Employee information deleted successfully..."
        this.name="";
      })
    })
    
  }

  ngOnInit(): void {
  }

}
