import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Data2Service {

  constructor() { }
  TestData2Service(Msg2:any)
  {
    console.log("TestData2Service");
    return Msg2;
  }
}
