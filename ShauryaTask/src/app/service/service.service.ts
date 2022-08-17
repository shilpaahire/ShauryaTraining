import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
strURL:string="http://localhost:3000/Login";

  constructor(private http : HttpClient) { }

  GetAllUser() {
    return this.http.get("http://localhost:3000/Login");
  }

  AddNewUser(user: any) {
    return this.http.post<any>("http://localhost:3000/Login", user);
  }

  deleteUser(id:any) {

    const deleteURL = this.strURL+id;
    return this.http.delete(deleteURL);
  }

  updateUser(data:any) {
    // console.log(data);
    const UpadateURL= this.strURL+data.id;
    return this.http.put(UpadateURL,data);
  }
}
