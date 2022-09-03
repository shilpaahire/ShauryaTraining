import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpserviceService {
strURL:string="http://localhost:3000/employee1";
  constructor(private http : HttpClient) { }

  GetAllEmployee()
  {
    return this.http.get(this.strURL);
  }

  RemoveNames(empid:any)
  {
     const deleterecord = this.strURL + empid;
    return this.http.delete(this.strURL);
  }
}
