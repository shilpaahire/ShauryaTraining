import { Injectable } from '@angular/core';
import { Service2Service } from "./service2.service";

@Injectable({
  providedIn: 'root'
})
export class Service1Service {
  
constructor(private service2 : Service2Service) { }

  Display2():string
  {
    const Result  = this.service2.Display1();
    return Result;
  }
}

