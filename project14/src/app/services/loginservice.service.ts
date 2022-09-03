import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor(private http : HttpClient) { }
  strURL:string="http://localhost:3000/users";

  GetAllUser()
  {
    return this.http.get(this.strURL);
  }
}
