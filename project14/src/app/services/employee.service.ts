import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
strURL:string="http://localhost:3000/employee";
  constructor(private http : HttpClient) { }

  GetAllEmployee()
  {
    return this.http.get(this.strURL);
  }

  AddNewEmp(emp : any)
  {
    return this.http.post(this.strURL,emp);
  }
}
