import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Service2Service {

  constructor() { }

  Display1(): string {
    console.log("Service 1 get called...");
    return "Service 1 get called...";
  }

}
